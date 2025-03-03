"""new columns in driver

Revision ID: 89139edf6e19
Revises: f7ce4ced11ff
Create Date: 2023-04-20 09:57:53.745463

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '89139edf6e19'
down_revision = 'f7ce4ced11ff'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('drivers', schema=None) as batch_op:
        batch_op.add_column(sa.Column('country', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('podiums', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('dob', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('bio', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('drivers', schema=None) as batch_op:
        batch_op.drop_column('bio')
        batch_op.drop_column('dob')
        batch_op.drop_column('podiums')
        batch_op.drop_column('country')

    # ### end Alembic commands ###
