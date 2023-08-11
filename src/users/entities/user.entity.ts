import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';


@Entity('Users')
export class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ length: 200, nullable: true })
    nom: string;

    @Column({ length: 200, nullable: true })
    prenom: string;

    @Column({ length: 200, unique: true, nullable: true })
    pseudo: string;

    @Column({ length: 200, nullable: true })
    email: string;

    @Column({ length: 200, nullable: true })
    password: string;
   

}
