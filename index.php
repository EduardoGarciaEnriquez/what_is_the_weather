<?php
	
	$weather='';
	$error='';

	if ($_GET['city'])
	{
    $city= $_GET['city'];

    //url content from https://openweathermap.org/current in json format
    $urlContent = file_get_contents("http://api.openweathermap.org/data/2.5/weather?q=".$city."&APPID=0853d40341443e2e1cbdba1914754e60");
    //
    $weatherArray = json_decode($urlContent, true);
    //print_r($weatherArray);

    //check if the entered city is a real city saved in the array
    if ($weatherArray['cod']==200) {
      $tempCelcius=intval(($weatherArray['main']['temp'])-273.15);
      $windSpeed = $weatherArray['wind']['speed'];
      $weather = "The weather in ".$city." is currently ".$weatherArray['weather'][0]['description']." ";
      $weather .= "<br>The temperature is ".$tempCelcius." °C";
      $weather .= "<br>The wind speed is ".$windSpeed." m/s";
    }
    //if not, modify variable $error.
    else{
      $error = $city." is not a valid city. Try again";
    }

	}
?>


	    <form>
		  <div class="form-group">
		    <label for="exampleInputEmail1">Enter the name of the city:</label>
		    <input type="search" class="form-control" id="city" aria-describedby="emailHelp" placeholder="Search city or postal code" name="city" value="<?php echo $_GET['city']; ?> ">
		  </div>

		  <button type="submit" class="btn btn-primary">Submit</button>

		  <div id="weather">
		  	<?php
		  	
		  	if ($weather)
			  {
			  	echo '<div class="alert alert-primary" role="alert">'.$weather.'
			  		</div>';
			  }

			if ($error) {
				echo '<div class="alert alert-warning" role="alert">'.$error.'
			  		</div>';
			}

			?></div>

		</form>