export interface GetDataQualityAnalysisResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题。
     * @example `4A0AEC56-5C9A-5D47-93DF-7227836FFF82`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 各清单的得分。
         */
        dataQuality: {
            /**
             * 清单名称。
             * @example `工序-1/清单-1`
             */
            inventory: string;
            /**
             * 得分。分布范围1~5，越接近1表示数据质量越好。
             */
            score: {
                /**
                 * 数据质量评价指标1：活动数据可信度
                 * @example `3`
                 */
                g1: number;
                /**
                 * 数据质量评价指标2：因子数据可信度
                 * @example `3`
                 */
                g2: number;
                /**
                 * 数据质量评价指标3：时间代表性
                 * @example `3`
                 */
                g3: number;
                /**
                 * 数据质量评价指标4：地理代表性
                 * @example `3`
                 */
                g4: number;
            };
        }[];
        /**
         * 指标得分
         */
        dataQualityResult: {
            /**
             * 评分。适用于DQR结果，分布范围1~5，越接近1表示数据质量越好，有效位数保留小数点后4位。
             * @example `1.2345`
             */
            data_quality_score: number;
            /**
             * 数据质量评价指标1：活动数据可信度
             * @example `1.2345`
             */
            g1: number;
            /**
             * 数据质量评价指标2：因子数据可信度
             * @example `1.2345`
             */
            g2: number;
            /**
             * 数据质量评价指标3：时间代表性
             * @example `1.2345`
             */
            g3: number;
            /**
             * 数据质量评价指标4：地理代表性
             * @example `1.2345`
             */
            g4: number;
        };
        /**
         * 敏感度分析列表
         */
        sensitivityList: {
            /**
             * 清单项id
             * @example `1`
             */
            id: string;
            /**
             * 清单项的名称
             * @example `清单1`
             */
            inventory: string;
            /**
             * 减排措施列表
             */
            reductionList: string[];
            /**
             * 灵敏度百分比
             * @example `91.7`
             */
            sensitivity: number;
        }[];
        /**
         * 不确定性值。模型整体不确定性百分比结果，"10.00"表示10.00%的不确定性，代表碳足迹结果在±10.00%的范围。由单一清单的不确定性贡献加权叠加得到。
         * @example `10.00`
         */
        uncertainty: string;
        /**
         * 不确定性列表
         */
        uncertaintyValues: {
            /**
             * 清单名称。格式为：工序名/清单名。
             * @example `工序-1/清单-1`
             */
            inventory: string;
            /**
             * 清单的不确定性绝对贡献大小。建模过程中的各清单数据质量对碳足迹结果的影响，当某个清单的不确定贡献大时，请尽可能提高它的数据质量以提升碳足迹分析准确度。 "1.4964"的含义是不确定贡献了1.4964 kgCO₂e/unit，其中unit为产品的单位。
             * @example `1.4964`
             */
            uncertaintyContribution: string;
        }[];
    };
}
