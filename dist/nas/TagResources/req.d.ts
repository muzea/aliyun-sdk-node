export interface TagResourcesRequest {
    /**
     * 资源类型。取值为filesystem，表示文件系统。
     * @example `filesystem`
     */
    "ResourceType": string;
    /**
     * 资源ID。取值范围：1~50。
     * @example `03e08484f0`
     */
    "ResourceId": string[];
    /**
     * 标签信息集合。
     */
    "Tag": {
        /**
         * 标签键。
         * 限制：
         * - 不能为空。
         * - N的取值范围为1~20。
         * - 最多支持128个字符。
         * - 不能以`aliyun`或`acs:`开头。
         * - 不能包含`http://`和`https://`。
         * @example `nastest`
         */
        Key: string;
        /**
         * 标签值。
         * 限制：
         * - N的取值范围为1~20。
         * - 最多支持128个字符。
         * - 不能以`aliyun`或`acs:`开头。
         * - 不能包含`http://`和`https://`。
         * @example `filetest`
         */
        Value: string;
    }[];
}
