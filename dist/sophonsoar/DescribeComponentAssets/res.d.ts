export interface DescribeComponentAssetsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BFEFB76D-DD0E-5529-BD57-0DAC10B9B30F`
     */
    RequestId: string;
    /**
     * 资产列表。
     */
    ComponentAssets: {
        /**
         * 资产的唯一标识ID。
         * @example `7xx`
         */
        Id: number;
        /**
         * 资产的创建时间，格式为UTC格式，yyyy-MM-ddTHH:mm:ssZ。
         * @example `2023-03-23T14:38Z`
         */
        GmtCreate: string;
        /**
         * 资产的修改时间，格式为UTC格式，yyyy-MM-ddTHH:mm:ssZ。
         * @example `2023-03-23T14:38Z`
         */
        GmtModified: string;
        /**
         * 资产的名称。
         * @example `test asset`
         */
        Name: string;
        /**
         * 资产所属的组件名称。
         * @example `pyhton3`
         */
        Componentname: string;
        /**
         * 资产配置信息，为JSON格式。DescribeComponentAssetForm
         * >资产信息的格式通过[DescribeComponentAssetForm](~~DescribeComponentAssetForm~~)接口获取。
         * @example `[
            {
                "name": "authMethod",
                "value": "ak"
            },
            {
                "name": "accessKeyId",
                "value": "xxxxxxx"
            },
            {
                "name": "accessKeySecret",
                "value": "xxxxx"
            },
            {
                "name": "roleArn",
                "value": ""
            }
        ]`
         */
        Params: string;
        /**
         * 资产的UUID。
         * @example `ff6fe161-93e2-464c-a326-fxxxxxx`
         */
        AssetUuid: string;
    }[];
}
