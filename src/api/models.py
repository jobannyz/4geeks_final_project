from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import safe_str_cmp

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    address = db.Column(db.String(250)) 
    client = db.relationship('ShopCart', backref='user', lazy=True)
    client_order = db.relationship('Ordenes', backref='user', lazy=True)
    client_recipt = db.relationship('Factura', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "address": self.address
        }
    def check_password(self, password):
        return safe_str_cmp(password, self.password)

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    catering_service = db.Column(db.Text)
    decoracion = db.Column(db.Text)
    dj = db.Column(db.Text)
    stock = db.Column(db.Integer)
    precio = db.Column(db.Integer)
    client = db.relationship('ShopCart', backref='service', lazy=True)
    client_order = db.relationship('Ordenes', backref='service', lazy=True)
    client_recipt = db.relationship('Factura', backref='service', lazy=True)

    def __repr__(self):
        return '<Service %s>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "stock": self.stock,
            "precio": self.precio,
            "decoracion": self.decoracion,
            "catering_service": self.catering_service,
            "dj": self.dj
        }

class ShopCart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))
    precio = db.Column(db.Integer)
    cantidad = db.Column(db.Integer)
    

    def __repr__(self):
        return '<Service %s>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "cantidad": self.cantidad,
            "precio": self.precio,
            "service_id": self.service_id
        }

class Ordenes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    event_date = db.Column(db.String(250), unique=False)
    event_address = db.Column(db.String(512), unique=False)
    

    def __repr__(self):
        return '<Ordenes %s>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "service_id": self.service_id,
            "event_date": self.event_date,
            "event_address": self.event_address
        }

class Factura(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))
    total = db.Column(db.Integer)

    def __repr__(self):
        return '<Factura %s>' % self.id
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "service_id": self.service_id,
            "total": self.total
        }