# YouTube Channel Statistics with Python & Google API

This project demonstrates how to use Python and the YouTube Data API to fetch, analyze, and visualize statistics from multiple YouTube channels. It covers:

- Making GET and POST requests with `requests`
- Fetching YouTube channel data using the Google API client
- Collecting channel and video statistics
- Visualizing data with Seaborn and Matplotlib

---

## Features

- **GET and POST requests**: Learn the basics with `requests` and `httpbin.org`
- **YouTube Data API integration**: Use the `googleapiclient.discovery` library to interact with YouTube
- **Multiple channel support**: Fetch stats for several channels at once
- **Data visualization**: Create informative bar charts to compare subscriber counts, views, and video counts
- **Video-level analysis**: Retrieve and rank most viewed videos

---

## Setup

1. **Clone this repo**

    ```bash
    git clone https://github.com/Aaron-IN4/api-test.git
    cd api-test
    ```

2. **Install dependencies**

    ```bash
    pip install requests google-api-python-client pandas seaborn matplotlib
    ```

3. **Get a YouTube Data API Key**

    - Visit the [Google Developers Console](https://console.developers.google.com/)
    - Create a project and enable the YouTube Data API v3
    - Create an API key and add it to the notebook where indicated

4. **Run the Notebook**

    - Open `API_DAY_3_ipynb.ipynb` in Jupyter or Google Colab
    - Follow the cells step by step

---

## Usage Overview

- **Fetch channel statistics**
    ```python
    from googleapiclient.discovery import build

    api_key = 'YOUR_API_KEY'
    youtube = build('youtube', 'v3', developerKey=api_key)
    channel_id = 'CHANNEL_ID'
    ```

- **Get channel stats**
    ```python
    def get_channel_stats(youtube, channel_id):
        request = youtube.channels().list(
            part='snippet,contentDetails,statistics',
            id=channel_id
        )
        response = request.execute()
        return response
    ```

- **Visualize data**
    ```python
    import seaborn as sns
    import matplotlib.pyplot as plt

    sns.barplot(x='Channel_name', y='Subscribers', data=channel_data)
    plt.show()
    ```

## Project Structure
- Css
- Html
- Images
- Js
- node_modules
- API_Day_3_ipynb
- Readme.md
- Testing_API.ipynb

---

## Notes

- All API calls are subject to quota limits.
- Replace all placeholder API keys with your own.
- For educational purposes only.

---

## References

- [YouTube Data API v3 Docs](https://developers.google.com/youtube/v3)
- [Google API Python Client](https://github.com/googleapis/google-api-python-client)
- [Pandas Documentation](https://pandas.pydata.org/)
- [Seaborn Documentation](https://seaborn.pydata.org/)

---

## License

MIT License
