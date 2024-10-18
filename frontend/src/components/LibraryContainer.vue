<template>
    <div class="container">
        <div class="header">
            Your library
        </div>
        <div class="nav">
            <a class="active" href="#">
                Flashcard sets
            </a>
            <a href="#">
                Practice tests
            </a>
            <a href="#">
                Expert solutions
            </a>
            <a href="#">
                Folders
            </a>
            <a href="#">
                Classes
            </a>
        </div>
        <div class="search-container">
            <div class="dropdown">
                Recent
            </div>
            <div class="search-box">
                <input placeholder="Search your sets" type="text" />
                <i class="fas fa-search">
                </i>
            </div>
        </div>
        <div class="section-title">
            THIS WEEK
        </div>
        <div class="card">
            <div class="info">
                <div class="terms">
                    100 terms
                </div>
                <img alt="User profile picture" height="30"
                    src="https://storage.googleapis.com/a1aa/image/fk8doXghMeic90DYCk4tI8KZbnHjOQ7XXQTsxAM3hVW062nTA.jpg"
                    width="30" />
                <div class="username">
                    naomiakira02
                </div>
            </div>
            <div class="title">
                日本語
            </div>
        </div>
        <div class="section-title">
            IN SEPTEMBER 2024
        </div>
        <div class="card">
            <div class="info">
                <div class="terms">
                    4 terms
                </div>
                <img alt="User profile picture" height="30"
                    src="https://storage.googleapis.com/a1aa/image/fk8doXghMeic90DYCk4tI8KZbnHjOQ7XXQTsxAM3hVW062nTA.jpg"
                    width="30" />
                <div class="username">
                    naomiakira02
                </div>
            </div>
            <div class="title">
                N3
            </div>
        </div>
        <div class="card">
            <div class="info">
                <div class="terms">
                    6 terms
                </div>
                <img alt="User profile picture" height="30"
                    src="https://storage.googleapis.com/a1aa/image/fk8doXghMeic90DYCk4tI8KZbnHjOQ7XXQTsxAM3hVW062nTA.jpg"
                    width="30" />
                <div class="username">
                    naomiakira02
                </div>
            </div>
            <div class="title">
                N3
            </div>
        </div>
    </div>

</template>

<style scoped>
    * {
        font-family: 'Roboto', sans-serif;
        background-color: #f6f7fb;
        margin: 0;
        padding: 0;
    }

    .container {
        width: 80%;
        margin: 0 auto;
        padding: 48px 40px;
        background: #f6f7fb;
    }

    .header {
        font-size: 32px;
        font-weight: 700;
        color: #333;
        margin-bottom: 20px;
    }

    .nav {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
    }

    .nav a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        padding-bottom: 5px;
    }

    .nav a.active {
        border-bottom: 2px solid #333;
    }

    .search-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .search-container .dropdown {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
        cursor: pointer;
    }

    .search-container .search-box {
        display: flex;
        align-items: center;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 10px;
        width: 300px;
    }

    .search-container .search-box input {
        border: none;
        outline: none;
        width: 100%;
        font-size: 14px;
    }

    .search-container .search-box i {
        color: #888;
    }

    .section-title {
        font-size: 14px;
        font-weight: 500;
        color: #888;
        margin: 20px 0 10px;
    }

    .card {
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .card .info {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .card .info img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    .card .info .terms {
        font-size: 14px;
        color: #888;
    }

    .card .info .username {
        font-size: 14px;
        color: #888;
    }

    .card .title {
        font-size: 20px;
        font-weight: 700;
        color: #333;
    }
</style>