<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Formulaire html</title>

  <!--   <link	href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    BOOTSTRAP & JQuery-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossorigin="anonymous"></script>
  <link href="css/font-awesome.min.css" rel="stylesheet">  <!-- chargement icones Font Awesome-->

    <style media="screen">
      #login-form {
        margin: 20px auto;
        width:450px;

      }

      form {
          margin: 10px;
          padding:10px;
      }

      .panel-footer {
        text-align: right;
      }


    </style>


  </head>
  <body>

  <div class="panel-group">

      <div id="login-form" class="panel panel-default" >

        <div class="panel-heading">
            Identification
        </div>

        <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post" id="login-form">

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">
                <i class="fa fa fa-envelope-o fa-fw" aria-hidden="true"></i>
              </span>
              <input id="chpMail" type="email" name="login" class="form-control" placeholder="Votre Email" />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">
                <i class="fa fa-key fa-fw" aria-hidden="true"></i>
              </span>
              <input id="chpPassword" type="password" name="password" class="form-control" placeholder="Saisissez votre mot de passe"/>
            </div>
          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">
                <i class="fa fa-key fa-fw" aria-hidden="true"></i>
              </span>
              <input id="chpPassword" type="password" name="confirmPassword" class="form-control" placeholder="Confirmez votre mot de passe" />
            </div>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox"> j’ai pas lu mais je suis d’accord
            </label>
          </div>
        </form>

          <div class="panel-footer">
              <button type="submit" class="btn btn-primary" form="loginForm">Valider</button>
          </div>
        </div>
      </div>
  </div>

  </body>
</html>
