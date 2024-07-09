export interface ScaleInstanceRequest {
    /**
     * 实例id。
     * @example `hgprecn-cn-xxxxxxx`
     */
    "instanceId": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 实例规格。取值：
         * - 8核32 GB （计算节点数量：1）
         * - 16核64 GB （计算节点数量：1）
         * - 32核128 GB（计算节点数量：2）
         * - 64核256 GB（计算节点数量：4）
         * - 96核384 GB（计算节点数量：6）
         * - 128核512 GB（计算节点数量：8）
         * - 等
         * >
         *  >- 填写核数即可。
         *  >- 购买1024以上规格请提交工单申请。
         *  >- Shared实例类型无需指定规格。
         *  >- 8核32GB（计算节点数量：1）的规格仅用于体验使用，不可用于生产。
         * @example `128`
         */
        cpu: number;
        /**
         * 实例标准存储空间。单位：GB。
         * > 按量付费（PostPaid）实例会忽略此参数
         * @example `1000G`
         */
        storageSize: number;
        /**
         * 实例低频存储空间。单位：GB。
         * > 按量付费（PostPaid）实例会忽略此参数。
         * @example `1000G`
         */
        coldStorageSize: number;
        /**
         * 变配类型。取值：
         * - UPGRADE：升配
         * - DOWNGRADE：降配
         * >
         * > - 升配规格不能小于原规格，为空的字段表示维持原规格不变，在此基础上，至少一项规格比原规格大。
         * > - 降配规格不能大于原规格，为空的字段表示维持原规格不变，在此基础上，至少一项规格比原规格小。
         * @example `UPGRADE`
         */
        scaleType: string;
        /**
         * 网关数量，取值[2, 50]。
         * > 只有Warehouse类型需要指定该参数。
         * @example `4`
         */
        gatewayCount: number;
        enableServerlessComputing: boolean;
    };
}
