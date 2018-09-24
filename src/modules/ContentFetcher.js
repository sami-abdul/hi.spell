const NEWS_API_URL = "NEWS_API_URL_HERE"
const TIP_API_URL = "TIP_API_URL_HERE"

export fetchTopNews = () => {
    fetch(NEWS_API_URL).then((resp) => resp.json()).then(function(data) {
        
    })
  })
}

export fetchTopTip = () => {
    fetch(TIP_API_URL).then((resp) => resp.json()).then(function(data) {

    })
  })
}

