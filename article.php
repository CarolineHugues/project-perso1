<?php include 'header.php'; 
include 'bdd-connection.php'; 

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
  </article>
<?php 
}
$response->closeCursor(); ?>
<?php include 'footer.php'; ?>