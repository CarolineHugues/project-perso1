<?php include 'header.php'; 
include 'bdd-connection.php';

$number_articles = $bdd->query('SELECT COUNT(*) FROM articles')->fetchColumn();
if ($_GET['id'] == $number_articles) {
	$next_article = 1;
}
else {
	$next_article = $_GET['id'] + 1;
}

if ($_GET['id'] == 1) {
	$previous_article = $number_articles;
}
else {
	$previous_article = $_GET['id'] - 1;
}

$response = $bdd->prepare('SELECT * FROM articles WHERE id = :id');
$response->execute(array(':id' => $_GET['id']));

while ($article = $response->fetch()){
?>
  <article id="article-<?php echo $_GET['id']?>" class="music-article">
    <section class="music-video">
      <div class="background"></div>
    	<video data-video=<?php echo $_GET['id']?> preload controls>
       <source src="http://localhost/project-sass-music-travel/videos/<?php echo $article['link'];?>" type="video/mp4"> 
      </video>
    </section>

    <section class="container">
    	<div class="double" id="head">
        <h1><?php echo $article['title'];?></h1> 
        <h2><?php echo $article['description'];?></h2>
      </div>
   	  <div class="simple">
    		<p><?php echo $article['content'];?></p>
    	</div>
  	 <div class="simple">
    		<p><?php echo $article['content2'];?></p>
    	</div>
    </section>

    <nav>
    	<p>
        <a href="http://localhost/project-sass-music-travel/article.php?id=<?php echo $previous_article; ?>">Ville précédante</a>
        -
    		<a href="http://localhost/project-sass-music-travel/">Accueil</a>
    		- 
    		<a href="http://localhost/project-sass-music-travel/article.php?id=<?php echo $next_article; ?>">Ville suivante</a>
    	</p>
    </nav>
  </article>
<?php 
}
$response->closeCursor(); ?>
<?php include 'footer.php'; ?>