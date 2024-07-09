export interface GetElecTrendResponse {
    /**
     * 请求ID。
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 水电逐月用电和碳排等数据。
         */
        water: {
            /**
             * 碳排量。
             * @example `3.14`
             */
            carbonEmissionData: number;
            /**
             * 用电量。
             * @example `3.14`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）。
             * @example `0.5`
             */
            ratio: number;
            /**
             * 单位。
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称。
             * @example `水电`
             */
            name: string;
            /**
             * 电力类型编码。
             * @example `carbonInventory.check.water_electricity`
             */
            nameKey: string;
            /**
             * 月份。
             * @example `12`
             */
            month: number;
            /**
             * 年份。
             * @example `2024`
             */
            year: string;
        }[];
        /**
         * 光电逐月用电和碳排等数据。
         */
        light: {
            /**
             * 碳排量。
             * @example `3.14`
             */
            carbonEmissionData: number;
            /**
             * 用电量。
             * @example `3.14`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）。
             * @example `0.5`
             */
            ratio: number;
            /**
             * 单位。
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称。
             * @example `光电`
             */
            name: string;
            /**
             * 电力类型编码。
             * @example `carbonInventory.check.light_electricity`
             */
            nameKey: string;
            /**
             * 月份。
             * @example `12`
             */
            month: number;
            /**
             * 年份。
             * @example `2024`
             */
            year: string;
        }[];
        /**
         * 市电逐月用电和碳排等数据。
         */
        urban: {
            /**
             * 碳排量。
             * @example `3.14`
             */
            carbonEmissionData: number;
            /**
             * 用电量。
             * @example `3.14`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）。
             * @example `0.5`
             */
            ratio: number;
            /**
             * 单位。
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称。
             * @example `市电`
             */
            name: string;
            /**
             * 电力类型编码。
             * @example `carbonInventory.check.urban_electricity`
             */
            nameKey: string;
            /**
             * 月份。
             * @example `12`
             */
            month: number;
            /**
             * 年份。
             * @example `2024`
             */
            year: string;
        }[];
        /**
         * 风电逐月用电和碳排等数据。
         */
        wind: {
            /**
             * 碳排量。
             * @example `3.14`
             */
            carbonEmissionData: number;
            /**
             * 用电量。
             * @example `3.14`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）。
             * @example `0.5`
             */
            ratio: number;
            /**
             * 单位。
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称。
             * @example `风电`
             */
            name: string;
            /**
             * 电力类型编码。
             * @example `carbonInventory.check.wind_electricity`
             */
            nameKey: string;
            /**
             * 月份。
             * @example `12`
             */
            month: number;
            /**
             * 年份。
             * @example `2024`
             */
            year: string;
        }[];
        /**
         * 核电逐月用电和碳排等数据。
         */
        nuclear: {
            /**
             * 碳排量。
             * @example `3.14`
             */
            carbonEmissionData: number;
            /**
             * 用电量。
             * @example `3.14`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）。
             * @example `0.5`
             */
            ratio: number;
            /**
             * 单位。
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称。
             * @example `核电`
             */
            name: string;
            /**
             * 电力类型编码。
             * @example `carbonInventory.check.nuclear_electricity`
             */
            nameKey: string;
            /**
             * 月份。
             * @example `12`
             */
            month: number;
            /**
             * 年份。
             * @example `2024`
             */
            year: string;
        }[];
        /**
         * 可再生电逐月用电和碳排等数据。
         */
        renewing: {
            /**
             * 碳排量。
             * @example `3.14`
             */
            carbonEmissionData: number;
            /**
             * 用电量。
             * @example `3.14`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）。
             * @example `0.5`
             */
            ratio: number;
            /**
             * 单位。
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称。
             * @example `可再生电`
             */
            name: string;
            /**
             * 电力类型编码。
             * @example `carbonInventory.carbonEmissionAnalysis.components.CarbonDetail.lingTanDianLi`
             */
            nameKey: string;
            /**
             * 月份。
             * @example `12`
             */
            month: number;
            /**
             * 年份。
             * @example `2024`
             */
            year: string;
        }[];
        /**
         * 零电逐月用电和碳排等数据。
         */
        zero: {
            /**
             * 碳排量。
             * @example `3.14`
             */
            carbonEmissionData: number;
            /**
             * 用电量。
             * @example `3.14`
             */
            rawData: number;
            /**
             * 用电量占当月所有用电量的比例：示例值：0.5（即占50%）。
             * @example `0.5`
             */
            ratio: number;
            /**
             * 单位。
             * @example `kWh`
             */
            dataUnit: string;
            /**
             * 电力类型名称。
             * @example `零电`
             */
            name: string;
            /**
             * 电力类型编码。
             * @example `carbonInventory.carbonEmissionAnalysis.components.CarbonDetail.lingTanDianLi`
             */
            nameKey: string;
            /**
             * 月份。
             * @example `12`
             */
            month: number;
            /**
             * 年份。
             * @example `2024`
             */
            year: string;
        }[];
    };
    /**
     * 请求返回 code，Success 代表请求成功，其他情况代表请求不成功，具体错误原因描述可通过 msg 查看。
     * @example `200`
     */
    code: string;
}
