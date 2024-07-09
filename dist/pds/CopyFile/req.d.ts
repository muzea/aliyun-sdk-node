export interface CopyFileRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 分享id。
         * 如果通过分享操作文件，请携带`x-share-token` header鉴权并传递此字段，此时`drive_id`无效。否则请使用`aksk`或者`access_token`方式鉴权，并传递`drive_id`字段。
         * `share_id`和`drive_id`两者必须有一个字段赋值。
         * @example `7JQX1FswpQ8`
         */
        share_id: string;
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 文件或文件夹 id
         * @example `4221bf6e6ab43c255edc4463bf3a6f5f5d317406`
         */
        file_id: string;
        /**
         * 拷贝到的空间id。
         * 默认值同drive_id。
         * @example `1`
         */
        to_drive_id: string;
        /**
         * 目的父文件夹 id，当复制进根目录时，填 root
         * @example `6520943DC261`
         */
        to_parent_file_id: string;
        /**
         * 当目标文件夹下存在同名文件时，是否自动重命名，默认为 false
         * @example `true`
         */
        auto_rename: boolean;
    };
}
