export interface AddTagsRequest {
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 标签键。
         * N的取值范围：1~3。Key的取值范围：1~64个字符。
         * 您可以输入新标签键，也可以使用云监控已存在的标签键。关于如何获取标签键，请参见[DescribeTagKeyList](~~145558~~)。
         * > Key不能以`aliyun`和`acs:`开头，且标签键（`Tag.N.Key`）和标签值（`Tag.N.Value`）必须同时设置。
         * @example `key1`
         */
        Key: string;
        /**
         * 标签值。
         * N的取值范围：1~3。Value的取值范围：1~64个字符。
         * 您可以输入新标签值，也可以使用云监控已存在的标签值。关于如何获取标签值，请参见[DescribeTagValueList](~~145557~~)。
         * > Value不能以`aliyun`和`acs:`开头，且标签键（`Tag.N.Key`）和标签值（`Tag.N.Value`）必须同时设置。
         * @example `value1`
         */
        Value: string;
    }[];
    /**
     * 应用分组ID。
     * N的取值范围：1~20。
     * 关于如何获取应用分组ID，请参见[DescribeMonitorGroups](~~115032~~)。
     * @example `7301****`
     */
    "GroupIds": string[];
}
