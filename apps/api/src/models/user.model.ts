import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'Users', timestamps: false })
export class User extends Model {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  declare id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  declare email: string;
}
