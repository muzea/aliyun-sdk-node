export interface GetFileRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 文件 id
         * @example `9520943DC264`
         */
        file_id: string;
        /**
         * 过期时间，单位为秒，取值范围为：[10,14400] 秒
         * @example `100`
         */
        url_expire_sec: number;
        /**
         * 筛选返回字段：
         * 1. 当填 * 时，返回文件所有字段（必须在请求中填写的除外）；
         * 2. 当只需要特定字段时，可填写为：url、thumbnail、exif、cropping\_suggestion、characteristic\_hash、video\_metadata、video\_preview_metadata，当需要多个字段时，以逗号 , 分割，如 url,thumbnail；
         * 3. 必须填写investigation_info字符串，才会在响应中返回investigation_info字段。
         * 默认返回所有字段（必须进行填写的除外）
         * @example `*`
         */
        fields: string;
        /**
         * 缩略图配置，可一次性返回最多5个缩略图，map的key可以自定义，返回时按key返回对应的缩略图链接
         */
        thumbnail_processes: any;
        /**
         * 分享id。
         * 如果通过分享操作文件，请携带`x-share-token` header鉴权并传递此字段，此时`drive_id`无效。否则请使用`aksk`或者`access_token`方式鉴权，并传递`drive_id`字段。
         * `share_id`和`drive_id`两者必须有一个字段赋值。
         * @example `7JQX1FswpQ8`
         */
        share_id: string;
    };
}
