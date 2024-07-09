export interface UpdateMediaRequest {
    /**
     * 需要更新基本信息的媒体ID。可以通过**MPS控制台** > **媒体管理** > **媒体列表**获取。
     * @example `3e1cd21131a94525be55acf65888****`
     */
    "MediaId": string;
    /**
     * 媒体标题。支持中英文、数字等。
     * - 若不设置则清空此字段。
     * - UTF8编码，最大128字节。
     * @example `hello`
     */
    "Title"?: string;
    /**
     * 媒体描述。支持中英文、数字等。
     * - 若不设置则清空此字段。
     * - UTF8编码，最大1024字节。
     * @example `example description`
     */
    "Description"?: string;
    /**
     * 封面URL。即您需要设置的封面的存储地址，可以通过**MPS控制台** > **工作流管理** > **媒体Bucket**或**OSS控制台** > **我的访问路径**获取。
     * - 不超过3200字节。
     * - URL遵循RFC 2396（UTF-8编码，并进行URLEncode）。更多信息，请参见[URLEncode说明](~~423796~~)。
     * @example `http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/test****.jpg`
     */
    "CoverURL"?: string;
    /**
     * 类目ID，整数。
     * - 若不设置则清空此字段。
     * - 不能为负数。
     * @example `1`
     */
    "CateId"?: number;
    /**
     * 标签列表。
     * - 用半角逗号（,）分隔，不超过16个标签。
     * - 单个标签不超过32字节。
     * - UTF8编码。
     * @example `tag1,tag2`
     */
    "Tags"?: string;
}
