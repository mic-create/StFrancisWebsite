import streamlit as st
import streamlit.components.v1 as components

# Set page to wide mode
st.set_page_config(layout="wide")

# Read your HTML file
with open("index.html", "r", encoding="utf-8") as f:
    html_code = f.read()

# Render the HTML file inside Streamlit
components.html(html_code, height=800, scrolling=True)