export interface DescribeDefaultAlgorithmsResponse {
    /**
     * 返回结果
     */
    result: {
        /**
         * 算法key
         * I2I   I2I召回链路
         * u2X2I    U2X2I召回链路
         * hot  热门商品召回链路
         * new    新品召回链路
         * embedding    向量召回链路
         * mtorder    召回链路优先级
         * rankservice    排序服务
         * @example `I2I`
         */
        key: string;
        /**
         * 实验定制值
         */
        config: {
            /**
             * 算法配置项key
             * @example `I2I-truncedquantity`
             */
            key: string;
            /**
             * 算法配置项默认值
             * @example `swing;commoni2i;pcategory;scategory`
             */
            defaultValue: string;
            /**
             * 算法配置项实验值
             * @example `300`
             */
            experimentValue: string;
            /**
             * 算法配置项name
             * （说明：系统默认算法，控制台需要通过美杜莎获取，用户自定义算法，后端会返回name）
             * @example `I2I算法`
             */
            name: string;
        }[];
        /**
         * 算法默认值
         * 对于i2i,hot,new等召回算法为"true"/"false"
         * 对于mtorder为各路召回链路的排序
         * @example `true`
         */
        defaultValue: string;
        /**
         * 算法类别
         * SYSTEM 系统默认类型
         * CUSTOM 用户自定义类型
         * @example `SYSTEM`
         */
        type: string;
        /**
         * 实验定制值
         * @example `300`
         */
        experimentValue: string;
        /**
         * 是否有子配置项
         * true  是
         * false  否
         * @example `true`
         */
        hasConfig: boolean;
        /**
         * 算法类目
         * RECALL  召回
         * RANK  排序
         * @example `RECALL`
         */
        category: string;
        /**
         * 名称（说明：系统默认算法，控制台需要通过美杜莎获取，用户自定义算法，后端会返回name）
         * @example `xxx`
         */
        name: string;
    }[];
    /**
     * 请求id
     * @example `F60021C4-57AF-5F46-9B3E-FCEF1C7A1459`
     */
    requestId: string;
}
