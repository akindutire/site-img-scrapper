<?php
 header('Access-Control-Allow-Origin: *');
 header('Content-Type: application/json');
 header('Access-Control-Allow-Methods: OPTIONS, POST, PUT, DELETE, GET');
 header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Methods, Authorization, X-Requested-With');
 
error_reporting(1);

require_once("./simplehtmldom/simple_html_dom.php");


if($_SERVER['REQUEST_METHOD'] === 'POST'){


    $input = (array) json_decode(file_get_contents('php://input'), TRUE);

    if(!isset($input['url'])){
        header('HTTP/1.1 409 EXPECTATION_FAILED');
        echo json_encode([ "msg" =>  "Endpoint expects url in request body", "data" => [] ]);
        exit();
    }

    $dom = file_get_html($input['url']);;
    
    $allImg = [];
    if(!empty($dom)){

        foreach($dom->find('img') as $img){

            array_push($allImg, $img->src);
        }


        $sanitized_text = preg_replace("/[\s]+/", " ", $dom->plaintext);
        $sanitized_list = explode(" ", $sanitized_text);

        $frequencyTable = [];
        foreach($sanitized_list as $word){
            $frequencyTable[$word] += 1;
        }

        arsort($frequencyTable); 

        header('HTTP/1.1 200 OK');
        echo json_encode([ "data" => [ "images" => $allImg, "word_freq" => array_slice($frequencyTable, 0, 10) ] ]);
        exit();

    }else{
        header('HTTP/1.1 409 EXPECTATION_FAILED');
        echo json_encode(["msg" => "No content found on page", "data" => []]);      
        exit(); 
    }

}else if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){

}else{
    header('HTTP/1.1 409 EXPECTATION_FAILED');
    echo json_encode([ "msg" => "Method not allowed", "data" => []]);
    exit();
}