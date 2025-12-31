Documentación de decisiones técnicas
Contexto general
Durante el desarrollo del proyecto se implementó una aplicación React con TypeScript orientada a la gestión de acciones y categorías. Para agilizar el diseño visual se empleó la biblioteca HeroUI, mientras que Zustand se utilizó como solución ligera para el manejo de estado global. La estructura del proyecto también contempló un mecanismo de autenticación basado en un token obtenido a través de un servicio de login. A continuación se resumen las principales decisiones técnicas tomadas.

Autenticación y manejo de estado
	•	AuthProvider: se implementó un proveedor de contexto que expone los métodos signin y signout. signin hace la llamada al servicio de login, extrae el token de la respuesta y lo guarda en la store y en localStorage; signout limpia el estado y elimina el token.
	•	PrivateRoute: se encapsularon las rutas protegidas usando un componente que consulta isAuthenticated y, si el token es nulo, redirige al login. También se añadió una verificación síncrona del token en localStorage para evitar redirecciones prematuras durante la rehidratación del estado.

Estructura de rutas y navegación
	•	Se definieron rutas públicas para el login (/login) y privadas para el dashboard y sus secciones (/dashboard/home, /dashboard/impacto-social, etc.). El componente AppRoutes emplea <Routes> y <Route> de react-router-dom para gestionar la navegación y agrupa las rutas privadas dentro de PrivateRoute.
	•	La barra lateral de navegación (navbar) se construyó como un componente independiente que lee un array de elementos (OPTIONSMENU) con etiqueta, ícono y ruta. El estado selectedIndex permite resaltar la opción activa y actualizar el contenido central mediante react-router.

Componentes y UI con HeroUI
	•	Tabla de acciones: se desarrolló un componente de tabla basado en Table, TableHeader y TableBody de HeroUI. La tabla incluye paginación controlada (Pagination), búsqueda filtrando por nombre, e incorpora acciones de edición y eliminación. Para editar y crear entradas se utilizan formularios modales con validación mediante react-hook-form.
	•	Forms personalizados: se encapsuló la integración entre los campos de formularios de HeroUI e react-hook-form en un componente CustomInput. Este componente mapea las propiedades (value, onChange, errorMessage, etc.) de manera que las validaciones personalizadas y los estilos de HeroUI se apliquen sin conflictos, es utilizado en el Login.
	•	Carga y almacenamiento de datos: al llamar al endpoint de acciones se actualiza la store de Zustand con el nuevo array de elementos. Los métodos addItem, updateItem y removeItem permiten gestionar en memoria la lista sin necesidad de un endpoint de edición; las peticiones al API solo se usan para las operaciones GET y POST.

Integración con la API
	•	Servicio de acciones: se creó un accionesService que abstrae la llamada a GET /api/v1/actions/admin-list y acepta parámetros de pageNumber y pageSize. El token se inyecta en cada solicitud mediante un interceptor de axios, de modo que no es necesario pasarlo manualmente.
	•	Paginación dinámica: el componente de tabla solicita nuevas páginas de datos al cambiar la página o el número de filas por página. Tras obtener la respuesta se actualizan los estados de items, totalItems y totalPages para ajustar la paginación.

Consideraciones de seguridad
	•	Resguardo de rutas: todas las páginas sensibles están envueltas en PrivateRoute. Esta comprobación evita que usuarios sin token accedan a recursos internos, reforzando la seguridad.

Creación de acciones
    • 	Se tomaron los mismos campos para la creación basado en el response del GET de los datos. Se implementó el cargue de archivos.
