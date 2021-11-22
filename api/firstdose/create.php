<?php
    require_once '../database.php';

    $postData = file_get_contents('php://input');
    if(isset($postData) && !empty($postData)){
        //get request data
        $request = json_decode($postData,true);

        //Validate data not empty
        if($request['fdID'] === '') {
            return http_response_code(404);
        }
        if($request['vrID'] === ''){
            return http_response_code(404);
        }
        if($request['vID'] === ''){
            return http_response_code(404);
        }
        if($request['vaID'] === ''){
            return http_response_code(404);
        }

        //trim data
        $fdID = trim($request['fdID']);
        $vrID = trim($request['vrID']);
        $vID = trim($request['vID']);
        $vaID = trim($request['vaID']);
        $date = trim($request['date']);

        //Query Update
        $stmt = $con->prepare("INSERT INTO firstdose VALUES(?,?,?,?,?)");
        $stmt->execute([null,$vrID,$vID,$vaID,null]);
        if($stmt){
            $id = $con->lastInsertId();
            $response = [
                'id' => $id,
                'vaccinerecipientID' => $vrID,
                'vaccineID' => $vID,
                'vaccineadminID' => $vaID,
            ];
            echo json_encode($response,JSON_PRETTY_PRINT);
        }else {
            $response = [
                'status' => 404,
                'message' => "Failed to Create Record!"
            ];
        }
    }else {
        http_response_code(400);
    }

?>