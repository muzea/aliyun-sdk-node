export interface RestartApplicationRequest {
    /**
     * 目标应用ID。
     * @example `0099b7be-5f5b-4512-a7fc-56049ef1****`
     */
    "AppId": string;
    /**
     * 最小存活实例数。取值说明如下：
     * - 如果设置为**0**，应用在升级过程中将会中断业务。
     * - 如果设置为**-1**，最小存活实例数将使用系统推荐值，即取现有实例数的25%。如果当前为5个实例，5×25%=1.25，向上取整后，最小存活实例数为2。
     * > 每次滚动部署最小存活的实例数建议≥1，保证业务不中断。
     * @example `1`
     */
    "MinReadyInstances"?: number;
    /**
     * 最小存活实例数百分比。取值说明如下：
     *  - **-1**：初始化值，表示不采用百分比。
     *  - **0~100**：单位为百分比，向上取整。例如设置为**50**%，如果当前为5个实例，则最小存活实例数为3。
     * > 当**MinReadyInstance**和**MinReadyInstanceRatio**同时传递时，且**MinReadyInstanceRatio**的取值非**-1**时，以**MinReadyInstanceRatio**参数为准。假设**MinReadyInstances**取值为**5**，**MinReadyInstanceRatio**取值为**50**，则会用**50**来计算最小存活实例数。
     * @example `-1`
     */
    "MinReadyInstanceRatio"?: number;
    "AutoEnableApplicationScalingRule"?: boolean;
}
