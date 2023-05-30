from pathlib import Path
from setuptools import setup, find_packages

setup(
    name="atlas",
    description="An assorted jack of all trades libraries for scripts for this project.",
    version="0.0.0",
    license="MIT",
    author="Hart Traveller",
    url="https://github.com/harttraveller/rokosphoenix/tree/main/atlas",
    long_description=(Path(__file__).parent / "README.md").read_text(),
    long_description_content_type="text/markdown",
    packages=find_packages(),
    include_package_data=True,
    install_requires=["pathlib", "orjson", "toml"],
)
