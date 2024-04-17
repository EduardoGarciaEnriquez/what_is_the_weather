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

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <title>P1 weather scraper APIs</title>

    <style type="text/css">
    	body{
    		background: url("SkyBG.jpg");
    		height: 100%;
    		background-position: center;
  			background-repeat: no-repeat;
  			background-size: cover;
    	}

    	.container{
    		text-align: center;
    		margin-top: 150px;
    		width: 500px;
    	}

    	#search{
    		text-align: center;
    		margin: auto;
    	}

    	#weather{
    		margin-top: 20px;
    	}
    </style>
  </head>

  <body>
  	<div class="container">
  		<h1>What's the weather?</h1>

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

  	</div>
    

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </body>
</html>