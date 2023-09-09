fx_version 'cerulean'
games { 'gta5' }

version '1.0.0'

loadscreen 'html/index.html'

files {
    'html/*.html',
    'html/*.js',
    'html/*.css',
    'html/assets/*.png',
}

--loadscreen_manual_shutdown 'yes'

client_script 'client/client.lua'
