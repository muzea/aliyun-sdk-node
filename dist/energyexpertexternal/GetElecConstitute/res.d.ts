export interface GetElecConstituteResponse {
    /**
     * 返回数据。
     */
    data: {
        /**
         * 水电。
         */
        water: {
            /**
             * 碳排放当量
             * @example `2.1`
             */
            carbonEmissionData: number;
            /**
             * 用电量
             * @example `1.2`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）
             * @example `0.4`
             */
            ratio: number;
            /**
             * 单位
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称。
             * @example `水电`
             */
            name: string;
            /**
             * 名称标识
             * @example `carbonInventory.check.water_electricity`
             */
            nameKey: string;
        };
        /**
         * 光电
         */
        light: {
            /**
             * 碳排放当量
             * @example `1.2`
             */
            carbonEmissionData: number;
            /**
             * 用电量
             * @example `1.2`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）
             * @example `0.2`
             */
            ratio: number;
            /**
             * 单位
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称。
             * @example `光电`
             */
            name: string;
            /**
             * 电力类型编码
             * @example `carbonInventory.check.light_electricity`
             */
            nameKey: string;
        };
        /**
         * 市电
         */
        urban: {
            /**
             * 碳排放当量
             * @example `1.2`
             */
            carbonEmissionData: number;
            /**
             * 用电量
             * @example `1.2`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）
             * @example `0.4`
             */
            ratio: number;
            /**
             * 单位
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称
             * @example `市电`
             */
            name: string;
            /**
             * 电力类型编码
             * @example `carbonInventory.check.urban_electricity`
             */
            nameKey: string;
        };
        /**
         * 风电
         */
        wind: {
            /**
             * 碳排放当量
             * @example `1.2`
             */
            carbonEmissionData: number;
            /**
             * 用电量
             * @example `1.1`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）
             * @example `0.3`
             */
            ratio: number;
            /**
             * 单位
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称
             * @example `风电`
             */
            name: string;
            /**
             * 电力类型编码
             * @example `carbonInventory.check.wind_electricity`
             */
            nameKey: string;
        };
        /**
         * 核电
         */
        nuclear: {
            /**
             * 碳排放当量
             * @example `2.3`
             */
            carbonEmissionData: number;
            /**
             * 用电量
             * @example `2`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）
             * @example `0.6`
             */
            ratio: number;
            /**
             * 单位
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称
             * @example `核电`
             */
            name: string;
            /**
             * 电力类型编码
             * @example `carbonInventory.check.nuclear_electricity`
             */
            nameKey: string;
        };
        /**
         * 零碳电力
         */
        renewing: {
            /**
             * 碳排放当量
             * @example `2.3`
             */
            carbonEmissionData: number;
            /**
             * 用电量
             * @example `4.3`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）
             * @example `0.44`
             */
            ratio: number;
            /**
             * 单位
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称
             * @example `可再生能源电力
            
            `
             */
            name: string;
            /**
             * 电力类型编码
             * @example `carbonInventory.carbonEmissionAnalysis.components.CarbonDetail.keZaiShengZiYuan`
             */
            nameKey: string;
        };
        /**
         * 零电
         */
        zero: {
            /**
             * 碳排放当量
             * @example `1.2`
             */
            carbonEmissionData: number;
            /**
             * 用电量
             * @example `444.3`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）
             * @example `0.33`
             */
            ratio: number;
            /**
             * 单位
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称
             * @example `零电`
             */
            name: string;
            /**
             * 电力类型编码
             * @example `carbonInventory.carbonEmissionAnalysis.components.CarbonDetail.lingTanDianLi`
             */
            nameKey: string;
        };
    };
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
}
