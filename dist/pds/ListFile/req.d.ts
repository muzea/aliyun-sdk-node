export interface ListFileRequest {
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
         * 空间 id。
         * @example `1`
         */
        drive_id: string;
        /**
         * 父文件夹 id，当父文件为根目录时，填写 root
         * @example `root`
         */
        parent_file_id: string;
        /**
         * 限定此次返回资源的数量，取值范围\[1,100\]。
         * 返回结果可以小于指定的数量，但不能多于指定的数量。
         * @example `50`
         */
        limit: number;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * <br>默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
        /**
         * 文件状态，可选字段如下：
         * available：只返回正常文件
         * uploading：只返回上传中文件
         * 默认只返回 available 状态文件
         * @example `available`
         */
        status: string;
        /**
         * 排序字段，可选值如下：
         * created\_at：根据创建时间排序
         * updated\_at：根据更新时间排序
         * size：根据文件大小排序
         * name：根据文件名排序
         * 默认根据 created_at 排序
         * @example `updated_at`
         */
        order_by: string;
        /**
         * 排序方向，可选字段为：
         * ASC：正序
         * DESC：倒序
         * 默认值为ASC
         * @example `ASC`
         */
        order_direction: string;
        /**
         * 文件分类，可选字段如下：
         * app：安装包
         * zip：压缩包
         * image：图片
         * doc：文档
         * video：视频
         * audio：音频
         * others：其他
         * 默认返回所有分类文件
         * @example `image`
         */
        category: string;
        /**
         * 文件类型，可选字段如下：
         * file：只返回文件
         * folder：只返回文件夹
         * 默认返回所有类型文件
         * @example `file`
         */
        type: string;
        /**
         * 筛选返回字段：
         * 1. 当填 * 时，返回文件所有字段（必须在请求中填写的除外）；
         * 2. 当只需要特定字段时，可填写为：url、exif、cropping\_suggestion、characteristic\_hash、video\_metadata、video\_preview_metadata，当需要多个字段时，以逗号 , 分割，如 url, exif;
         * 3. 必须填写investigation_info字符串，才会在响应中返回investigation_info字段。
         * 默认返回所有字段（必须进行填写的除外）
         * @example `*`
         */
        fields: string;
        /**
         * 缩略图配置，可一次性返回最多5个缩略图，map的key可以自定义，返回时按key返回对应的缩略图链接
         */
        thumbnail_processes: any;
    };
}
