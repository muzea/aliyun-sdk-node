export interface GetBucketWormResponse {
    /**
     * 存储Bucket合规保留策略的容器。
     */
    WormConfiguration: {
        /**
         * 合规保留策略的ID。
         * @example `1666E2CFB2B3418****`
         */
        WormId: string;
        /**
         * 合规保留策略所处的状态。可选值：
         * InProgress：合规保留策略创建后，该策略默认处于“InProgress”状态，且该状态的有效期为24小时。
         * Locked：合规保留策略处于锁定状态。
         */
        State: any;
        /**
         * Object的指定保留天数。
         * @example `20`
         */
        RetentionPeriodInDays: number;
        /**
         * 合规保留策略的创建时间。
         * @example `2020-10-15T15:50:32`
         */
        CreationDate: string;
        /**
         * 合规保留策略的过期时间。
         * @example `2020-10-20T15:50:32
        `
         */
        ExpirationDate: string;
    };
}
