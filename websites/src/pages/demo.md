# WASP DRI handle books

This document covers how to handle serious Woodblocks DRI issue including FPS dataset current active version checking, Lego/Topoflow model logs checking, setting force version via FPS and how create IcM ticket to get help from SnR team.

![WASP Super!](/img/logo.svg)

## Know about FPS dataset and find the good version
FPS dataset is an data publish management unit provided by [FPS](https://fpsmanager.azurewebsites.net). Simplly you can think FPS will monitor the dataset's cosmos path and if it find there're a new folder comes, it will transfer the new folder to the AP machines of the configurated AP environment and machine funcation. Below are two major FPS dataset responsible to publish WB PA/TA models. 
* [woodblocksadsfedp_prod](https://fpsmanager.azurewebsites.net/#/publish/detail/woodblocksadsfedp_prod) - PA
   * serves 19, 50, 52, 58, 59 
* [woodblocks_prod](https://fpsmanager.azurewebsites.net/#/publish/detail/woodblocks_prod) - TA
   * serves 31, 41, 56

Click the above two FPS dataset link to go to the related FPS dataset in FPS management portal. You can click "View" link in the "Subscriptions" table to see the rollout details for the dataset targetting the specific machine functions. And checking the "Publish Versions" list you can decide which version is a good version. Topically, a good version is the second latest data version. You are suggest to go to <https://fpsmanager.azurewebsites.net/#/monitor/rollout-status-by-dataset> to check whethe your selected good version happened lots of hours a ago.


## Parts of PA/TA SnR Environments/Machine Functions
Type | environtments | Machine Functions
--|--|--
PA | adspasnr1-prod-ch01, adspasnr1-prod-bn01, adspasnr1-prod-co4 | rankingserver
TA | adssnr1-prod-ch1b, adssnr1-prod-bn2b | WaaS_PS, listingstore_ps

Just list some parts of the environments/machine functions that host related PA/TA WB model





