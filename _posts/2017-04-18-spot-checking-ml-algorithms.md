---
title: "Spot-checking Machine Learning Algorithms"
date: 2017-04-18 06:00:00 -0800
categories: machine-learning
excerpt: The 'spot-check' approach is a great method for quickly finding a handful of ML models that have the best predictive potential, for a given dataset.
keywords: machine-learning, statistics
---

**GitHub Project**: [r-predictive-analysis-template](https://github.com/shane-kercheval/r-predictive-analysis-template)

The main objective of this project is for finding the best potential predictive models for a given dataset, using a shotgun (i.e. spot-check) approach of trying many different models with reasonable defaults.

The intent is not to skip the thinking process, but to get a lot of information in a relatively short amount of time.

The information will help determine which potential models are worth spending time on and further optimizing/improving.

There are two types projects, regression and classification.

The regression code can be found [here](https://github.com/shane-kercheval/r-predictive-analysis-template/blob/master/predictive_analysis_regression.Rmd), the classification code is TBD.

------------------------------

The following plots show the main outputs for the regression analysis.

- **shotgun approach**: plot showing cross-validated `RMSE` and `R-Squared` for a variety of models (with reasonable defaults) training on a training set.
	- For example:

![spot_check]({{ site.url }}/img/blog/resamples_regression-1.png)

- **final models**: plot showing `RMSE`, `MAE`, and `correlation` on the top x (e.g. 5) models that have been retrained on the entire training set (as oppossed to cross-validated), and the tested on the test set (data-points that the model has not seen).
	- For example:

![final_models]({{ site.url }}/img/blog/determine_best_models-32.png)
