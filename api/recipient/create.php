<?php
    require_once '../database.php';

    $postData = file_get_contents('php://input');
    
    if(isset($postData) && !empty($postData)){

        $request = json_decode($postData,true);

        //Validate data not empty
        
        if($request['id'] === '') {
            return http_response_code(404);
        }
        if($request['firstname'] === ''){
            return http_response_code(404);
        }
        if($request['middlename'] === ''){
            return http_response_code(404);
        }
        if($request['lastname'] === ''){
            return http_response_code(404);
        }
        if($request['category'] === ''){
            return http_response_code(404);
        }

        //trim data
        $id = trim($request['id']);
        $firstname = trim($request['firstname']);
        $middlename = trim($request['middlename']);
        $lastname = trim($request['lastname']);
        $category = trim($request['category']);

        //Insert Data
        $stmt = $con->prepare("INSERT INTO vaccinerecipient VALUES(?,?,?,?,?)");
        $stmt->execute([null,$firstname,$middlename,$lastname,$category]);

        if($stmt){
            $id = $con->lastInsertId();

            $vaccineRecipient = [
                'id' => $id,
                'firstname' => $firstname,
                'middlename' => $middlename,
                'lastname' => $lastname,
                'category' => $category
            ];
            echo json_encode($vaccineRecipient,JSON_PRETTY_PRINT);
        }
    } else {
        echo http_response_code(404);
    }

?>