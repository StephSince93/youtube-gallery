import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ nullable: true, type: 'bigint' })
  updatedAt?: number;

  @Column({ type: 'bigint' })
  createdAt: number;
}
