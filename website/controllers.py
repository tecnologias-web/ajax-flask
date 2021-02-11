import random
from flask import jsonify, render_template, request
from website import website_bp


@website_bp.route('/')
def index():
    return render_template('index.html')

@website_bp.route('/sortear')
def sorteio():
    inicio = request.args.get('inicio')
    fim = request.args.get('fim')
    sorteio = random.randint(int(inicio), int(fim))
    return jsonify(
        inicio=inicio,
        fim=fim,
        sorteio=sorteio
    )
