export interface GetCardStatusStatisticsResponse {
    /**
     * 接口返回码。
     * 200：表示成功。
     * 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `InstanceId cannot be empty.`
     */
    ErrorMessage: string;
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * true：调用成功。
     * false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 根据当前所在地展示对应语言的错误提示。
     * @example `InstanceId cannot be empty.`
     */
    LocalizedMessage: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 换绑停用数据统计。
         */
        UnbindResumeStatisticsDTO: {
            /**
             * 统付池套餐卡数量。
             * @example `10`
             */
            PoolCount: number;
            /**
             * 单卡套餐卡数量。
             * @example `20`
             */
            SingleCardCount: number;
            /**
             * 同档位池套餐卡数量。
             * @example `30`
             */
            SameFlowCardCount: number;
            /**
             * 总卡数量。
             * @example `60`
             */
            TotalCount: number;
        };
        /**
         * 信控停用数据统计。
         */
        FlowOutStatisticsDTO: {
            /**
             * 统付池套餐卡数量。
             * @example `10`
             */
            PoolCount: number;
            /**
             * 单卡套餐卡数量。
             * @example `20`
             */
            SingleCardCount: number;
            /**
             * 同档位池套餐卡数量。
             * @example `30`
             */
            SameFlowCardCount: number;
            /**
             * 总卡数量。
             * @example `60`
             */
            TotalCount: number;
        };
        /**
         * 异常停用数据统计。
         */
        ErrorStopStatisticsDTO: {
            /**
             * 统付池套餐卡数量。
             * @example `10`
             */
            PoolCount: number;
            /**
             * 单卡套餐卡数量。
             * @example `20`
             */
            SingleCardCount: number;
            /**
             * 同档位池套餐卡数量。
             * @example `30`
             */
            SameFlowCardCount: number;
            /**
             * 总卡数量。
             * @example `60`
             */
            TotalCount: number;
        };
        /**
         * 达量停用数据统计。
         */
        ExhaustStopStatisticsDTO: {
            /**
             * 统付池套餐卡数量。
             * @example `10`
             */
            PoolCount: number;
            /**
             * 单卡套餐卡数量。
             * @example `20`
             */
            SingleCardCount: number;
            /**
             * 同档位池套餐卡数量。
             * @example `30`
             */
            SameFlowCardCount: number;
            /**
             * 总卡数量。
             * @example `60`
             */
            TotalCount: number;
        };
        /**
         * 未实名停用数据统计。
         */
        UnCertifiedStopStatisticsDTO: {
            /**
             * 统付池套餐卡数量。
             * @example `10`
             */
            PoolCount: number;
            /**
             * 单卡套餐卡数量。
             * @example `20`
             */
            SingleCardCount: number;
            /**
             * 同档位池套餐卡数量。
             * @example `30`
             */
            SameFlowCardCount: number;
            /**
             * 总卡数量。
             * @example `60`
             */
            TotalCount: number;
        };
        /**
         * 主动停用数据统计。
         */
        ManageStopStatisticsDTO: {
            /**
             * 统付池套餐卡数量。
             * @example `10`
             */
            PoolCount: number;
            /**
             * 单卡套餐卡数量。
             * @example `20`
             */
            SingleCardCount: number;
            /**
             * 同档位池套餐卡数量。
             * @example `30`
             */
            SameFlowCardCount: number;
            /**
             * 总卡数量。
             * @example `60`
             */
            TotalCount: number;
        };
        /**
         * 套餐到期停机数据统计。
         */
        ExpireStopStatisticsDTO: {
            /**
             * 统付池套餐卡数量。
             * @example `10`
             */
            PoolCount: number;
            /**
             * 单卡套餐卡数量。
             * @example `20`
             */
            SingleCardCount: number;
            /**
             * 同档位池套餐卡数量。
             * @example `30`
             */
            SameFlowCardCount: number;
            /**
             * 总卡数量。
             * @example `60`
             */
            TotalCount: number;
        };
        /**
         * 套餐7天到期预警数据统计。
         */
        WeekWarnStatisticsDTO: {
            /**
             * 统付池套餐卡数量。
             * @example `10`
             */
            PoolCount: number;
            /**
             * 单卡套餐卡数量。
             * @example `20`
             */
            SingleCardCount: number;
            /**
             * 同档位池套餐卡数量。
             * @example `30`
             */
            SameFlowCardCount: number;
            /**
             * 总卡数量。
             * @example `60`
             */
            TotalCount: number;
        };
        /**
         * 风险告警统计。与控制台风险告警板块数据一致。
         */
        RiskWaringStatisticsDTO: {
            /**
             * 到期预警数。（7天内套餐到期）
             * @example `20`
             */
            WarningCount: number;
            /**
             * 总告警数。
             * @example `100`
             */
            WaringTotalCount: number;
            /**
             * 停机/停用数。
             * @example `40`
             */
            StopCount: number;
            /**
             * 余量预警数。（单卡套餐余量不足10%）
             * @example `40`
             */
            LeftFlowPercentageWarnCount: number;
        };
        /**
         * 套餐余量不足数据统计。
         */
        SingCardPeriodLeftFlowWarnDTO: {
            /**
             * 单卡周期套餐余量不足10%的告警数量。
             * @example `5`
             */
            LessFlowPercentage10Count: number;
            /**
             * 单卡周期套餐余量不足30%的告警数量.
             * @example `8`
             */
            LessFlowPercentage30Count: number;
        };
    };
}
