<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Formulario</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('js/buttons.js') }}"></script>

</head>
<body>
    <header class="header-bar">
        <h1>Test front-end</h1>
    </header>
    <div class="content-container">
        <div class="form-container">
            <div class="my-form">
                <h1 class="form-heading">Generador de texto</h1>
                <div class="de_gray"></div>
                <h1 class="form-second-heading">Presentación personal</h1>
                <p class="text-muted">Completa tus datos personales para rellenar automáticamente el texto</p>
              </div>
                <form method="POST" action="{{ route('form') }}" class="my-form">
                    {{ csrf_field() }}
                    <div class="row">
                        <div class="col-auto">
                            <div class="form-group">
                                <label for="Nombre">Nombre</label>
                                <input type="text" class="form-control form-control-sm small-input" id="Nombre" name="Nombre" placeholder="Gardenia">
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="form-group">
                                <label for="Primer_Apellido">Primer Apellido</label>
                                <input type="text" class="form-control form-control-sm small-input" id="Primer_Apellido" name="Primer_Apellido" placeholder="Arévalo">
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="form-group">
                                <label for="Segundo_Apellido">Segundo Apellido</label>
                                <input type="text" class="form-control form-control-sm small-input" id="Segundo_Apellido" name="Segundo_Apellido" placeholder="Manque">
                            </div>
                        </div>
                    </div>
                    
                    <div id="areas-container" class="form-group">
                        <label for="Area">Area de interés laboral</label>
                        <input type="text" class="form-control form-control-sm small-input" id="Area" name="Area" placeholder="Area de interés #1">
                    </div>
                    <button type="button" id="añadir-otra-btn" class="btn btn-primary border-0">Añadir otra</button>
                    <div id="hobbies-container" class="form-group">
                        <label for="Hobby">Hobbies</label>
                        <input type="text" class="form-control form-control-sm small-input" id="Hobby" name="Hobby" placeholder="Hobby #1">
                    </div>
                    <button type="button" id="añadir-otro-btn" class="btn btn-primary border-0">Añadir otro</button>
                    <div class="row">
                        <div class="col-auto">
                            <div class="form-group">
                                <label for="Correo">Correo electrónico</label>
                                <input type="text" class="form-control form-control-sm small-input" id="Correo" name="Correo" placeholder="correo@ejemplo.cl">
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="form-group">
                                <label for="Telefono">Número de teléfono</label>
                                <input type="text" class="form-control form-control-sm small-input" id="Telefono" name="Telefono" placeholder="987654321">
                            </div>
                        </div>
                    </div>
                    <div class="centered-button">
                        <button id="generar-btn" type="button" class="btn btn-secondary border-0">Generar Texto</button>
                    </div>
                </form>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h2>Presentación personal</h2>
                      </div>
                      <div class="modal-body">
                        <div id="presentation-text"></div>
                      </div>
                      <div class="modal-footer">
                        <button id="close-modal-btn">Cerrar</button>
                        <button id="copy-modal-btn">Copiar</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>
</html>
