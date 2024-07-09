export interface UpdateSecretVersionStageRequest {
    /**
     * 凭据名称或凭据资源名称（ARN）。
     * >访问其他阿里云账号下的凭据时，必须输入凭据ARN。凭据ARN的格式为`acs:kms:${region}:${account}:secret/${secret-name}`。
     * @example `secret001`
     */
    "SecretName": string;
    /**
     * 凭据的版本状态。
     * **场景一：为指定的凭据版本新增一个版本状态。**
     * 输入本参数、MoveToVersion，不输入RemoveFromVersion。本参数取值为ACSCurrent 、ACSPrevious或自定义状态。
     * **场景二：将指定的凭据版本的版本状态移除。**
     * 输入本参数、RemoveFromVersion，不输入MoveToVersion。本参数取值为自定义状态。
     * >ACSCurrent 、ACSPrevious为系统内置状态，不允许直接移除，只能从一个凭据版本移除并绑定到另一个凭据版本。
     * **场景三：将指定的凭据版本的版本状态移除，并绑定到其他凭据版本。**
     * 输入本参数、MoveToVersion、RemoveFromVersion。本参数取值为ACSCurrent 、ACSPrevious或自定义状态。
     * @example `ACSCurrent`
     */
    "VersionStage": string;
    /**
     * 凭据版本的版本号。表示将入参VersionStage指定的版本状态从该版本号移除。
     * > RemoveFromVersion和MoveToVersion至少指定其中一个参数。
     * @example `001`
     */
    "RemoveFromVersion"?: string;
    /**
     * 凭据版本的版本号。表示将入参VersionStage指定的版本状态绑定到该版本号。
     * > - RemoveFromVersion和MoveToVersion至少指定其中一个参数。
     * - 当VersionStage取值为ACSCurrent或ACSPrevious时，必须指定本参数。
     * @example `002`
     */
    "MoveToVersion"?: string;
}
