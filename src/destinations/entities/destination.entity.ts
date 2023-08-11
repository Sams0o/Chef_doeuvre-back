import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('Destinations')
export class Destination {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ length: 200, unique: true, nullable: true })
    pays: string;

    @Column({ length: 200, unique: true })
    ville: string;

    @Column({ type: 'date', length: 200, nullable: true })
    date_voyage: Date;

}
