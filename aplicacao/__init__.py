from flask import Flask
from website import website_bp


app = Flask('aplicacao')
app.config.from_object('aplicacao.config.Configuracao')
app.register_blueprint(website_bp)
