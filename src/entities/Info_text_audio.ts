import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("info_text_audio")
class Info_text_audio {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    text_value: string;

    @Column()
    file_name: string;

    @Column()
    file_path: string;

}

export { Info_text_audio }