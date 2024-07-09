export interface GetRegionConfigurationResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6F******`
     */
    RequestId: string;
    /**
     * 返回的地域配置信息。
     */
    Result: {
        /**
         * 环境标志。
         * @example `production`
         */
        env: string;
        /**
         * 当前地域ID。
         * @example `cn-hangzhou`
         */
        regionId: string;
        /**
         * 售卖页入口地址。
         * @example `https://common-buy.aliyun.com/?commodityCode=elasticsearch&orderType=BUY#/buy`
         */
        createUrl: string;
        /**
         * 数据节点磁盘允许值。
         */
        dataDiskList: {
            /**
             * 磁盘允许设置连续值的最大值。
             * @example `2048`
             */
            scaleLimit: number;
            /**
             * 磁盘允许的最小值。
             * @example `20`
             */
            minSize: number;
            /**
             * 磁盘允许的最大值。
             * @example `5120`
             */
            maxSize: number;
            /**
             * 磁盘存储类型。
             * @example `cloud_ssd`
             */
            diskType: string;
            valueLimitSet: string[];
        }[];
        /**
         * Elasticsearch开放售卖的版本列表。
         */
        esVersionsLatestList: {
            /**
             * 支持的大版本号。
             * @example `5.5_with_X-Pack`
             */
            key: string;
            /**
             * 支持的小版本号全称 。
             * @example `5.5.3_with_X-Pack`
             */
            value: string;
        }[];
        /**
         * 数据节点规格列表。
         */
        nodeSpecList: {
            /**
             * 节点内存大小。
             * @example `64`
             */
            memorySize: number;
            /**
             * 该规格对应的CPU核数。
             * @example `16`
             */
            cpuCount: number;
            /**
             * 磁盘存储类型。
             * @example `local_efficiency`
             */
            diskType: string;
            /**
             * 规格名称。
             * @example `elasticsearch.sn2ne.large`
             */
            spec: string;
            /**
             * 该规格对应的磁盘大小。
             * @example `44000`
             */
            disk: number;
            /**
             * 存储类型，支持以下三种类型：
             * - common：云盘型
             * - local_efficiency：本地SATA盘
             * - local_ssd：本地SSD盘
             * @example `local_efficiency`
             */
            specGroupType: string;
            /**
             * 是否支持购买：
             * - true：支持
             * - false：不支持
             * @example `true`
             */
            enable: boolean;
        }[];
        /**
         * 协调节点磁盘允许值。
         */
        clientNodeDiskList: {
            /**
             * 磁盘允许设置连续值的最大值。
             * @example `18`
             */
            scaleLimit: number;
            /**
             * 磁盘允许的最小值。
             * @example `20`
             */
            minSize: number;
            /**
             * 磁盘允许的最大值。
             * @example `20`
             */
            maxSize: number;
            /**
             * 磁盘存储类型。
             * @example `cloud_efficiency`
             */
            diskType: string;
        }[];
        /**
         * 专有主节点磁盘允许值。
         */
        masterDiskList: {
            /**
             * 磁盘允许设置连续值的最大值。
             * @example `20`
             */
            scaleLimit: number;
            /**
             * 磁盘允许的最小值。
             * @example `20`
             */
            minSize: number;
            /**
             * 磁盘允许的最大值。
             * @example `20`
             */
            maxSize: number;
            /**
             * 磁盘存储类型。
             * @example `cloud_ssd`
             */
            diskType: string;
        }[];
        /**
         * 支持的版本配置。
         */
        supportVersions: {
            /**
             * 实例类别，支持以下两种类别：
             * - advanced：增强版
             * - x-pack：商业版
             * @example `x-pack`
             */
            instanceCategory: string;
            /**
             * 支持的Elasticsearch版本信息。
             */
            supportVersionList: {
                /**
                 * 售卖页支持可选的版本。
                 * @example `5.5`
                 */
                key: string;
                /**
                 * 详细版本号。
                 * @example `5.5.3`
                 */
                value: string;
            }[];
        }[];
        masterSpec: string[];
        clientNodeSpec: string[];
        zones: string[];
        instanceSupportNodes: string[];
        esVersions: string[];
        /**
         * 节点配置。
         */
        node: {
            /**
             * 数据节点允许的最大节点数。
             * @example `50`
             */
            maxAmount: number;
            /**
             * 数据节点允许的最小节点数。
             * @example `2`
             */
            minAmount: number;
        };
        /**
         * Jvm校验配置。
         */
        jvmConfine: {
            /**
             * 开启Jvm回收所需规格的内存最小值。
             * @example `32`
             */
            memory: number;
            supportEsVersions: string[];
            supportGcs: string[];
        };
        /**
         * 协调节点节点数范围。
         */
        clientNodeAmountRange: {
            /**
             * 协调节点节点数的最大值。
             * @example `25`
             */
            maxAmount: number;
            /**
             * 协调节点节点数的最小值。
             * @example `2`
             */
            minAmount: number;
        };
        /**
         * 冷节点配置。
         */
        warmNodeProperties: {
            /**
             * 磁盘配置列表。
             */
            diskList: {
                /**
                 * 磁盘允许设置连续值的最大值。
                 * @example `2048`
                 */
                scaleLimit: number;
                /**
                 * 磁盘允许的最小值。
                 * @example `500`
                 */
                minSize: number;
                /**
                 * 是否支持开启磁盘加密：
                 * - true：支持
                 * - false：不支持
                 * @example `true`
                 */
                diskEncryption: boolean;
                /**
                 * 磁盘允许的最大值。
                 * @example `5120`
                 */
                maxSize: number;
                /**
                 * 磁盘存储类型。
                 * @example `cloud_efficiency`
                 */
                diskType: string;
                valueLimitSet: string[];
            }[];
            spec: string[];
            /**
             * 节点数范围值。
             */
            amountRange: {
                /**
                 * 节点数最大值。
                 * @example `50`
                 */
                maxAmount: number;
                /**
                 * 节点数最小值。
                 * @example `2`
                 */
                minAmount: number;
            };
        };
        /**
         * Kibana节点配置。
         */
        kibanaNodeProperties: {
            spec: string[];
            /**
             * 节点数允许值范围。
             */
            amountRange: {
                /**
                 * 节点数最大值。
                 * @example `20`
                 */
                maxAmount: number;
                /**
                 * 节点数最小值。
                 * @example `1`
                 */
                minAmount: number;
            };
        };
        /**
         * 弹性节点配置。
         */
        elasticNodeProperties: {
            /**
             * 磁盘配置列表。
             */
            diskList: {
                /**
                 * 磁盘允许设置连续值的最大值。
                 * @example `2048`
                 */
                scaleLimit: number;
                /**
                 * 磁盘允许的最小值。
                 * @example `500`
                 */
                minSize: number;
                /**
                 * 是否支持开启磁盘加密：
                 * - true：支持
                 * - false：不支持
                 * @example `true`
                 */
                diskEncryption: boolean;
                /**
                 * 磁盘允许的最大值。
                 * @example `5120`
                 */
                maxSize: number;
                /**
                 * 磁盘存储类型。
                 * @example `cloud_ssd`
                 */
                diskType: string;
                valueLimitSet: string[];
            }[];
            spec: string[];
            /**
             * 冷节点节点数范围值。
             */
            amountRange: {
                /**
                 * 节点数最大值。
                 * @example `25`
                 */
                maxAmount: number;
                /**
                 * 节点数最小值。
                 * @example `2`
                 */
                minAmount: number;
            };
        };
    };
}
