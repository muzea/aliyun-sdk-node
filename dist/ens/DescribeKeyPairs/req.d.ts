export interface DescribeKeyPairsRequest {
    /**
     * 密钥对名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含以下字符：
     * - 数字
     * - :
     * - _
     * - .
     * 仅支持传单个名称。默认查询所有密钥对信息。
     * @example `TestKeyPairName`
     */
    "KeyPairName"?: string;
    /**
     * 查询列表的页码。取值：>0，默认查询第1页。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页查询时设置的每页行数。取值：>0，默认为10。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 密钥对的ID。
     * @example `ssh-50cynkq42sgj4ej1tn78t4***`
     */
    "KeyPairId"?: string;
}
