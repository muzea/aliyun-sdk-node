export interface DescribeAccessKeyLeakDetailResponse {
    /**
     * 泄露信息的类型，固定取值为**AccessKey**。
     * @example `AccessKey`
     */
    Type: string;
    /**
     * GitHub用户的图片地址。
     * @example `https://avatars.githubusercontent.com/u/26296896?s=48&v=****`
     */
    GithubUserPicUrl: string;
    /**
     * GitHub用户名。
     * @example `Blue00Blue`
     */
    GithubUser: string;
    /**
     * GitHub仓库名称。
     * @example `ExamOnline`
     */
    GithubRepoName: string;
    /**
     * GitHub文件类型。取值：
     * - Python
     * - XML
     * - GO
     * - Javascript
     * - INI
     * - JSON
     * - C++
     * @example `Python`
     */
    GithubFileType: string;
    /**
     * AK泄露事件的备注信息。
     * @example `12`
     */
    Remark: string;
    /**
     * GitHub文件更新时间。
     * @example `2021-07-06T09:49:33`
     */
    GithubFileUpdateTime: string;
    /**
     * AK泄露事件是否已加入白名单。取值：
     * - **no**：未加入白名单
     * - **yes**：已加入白名单
     * @example `no`
     */
    WhitelistStatus: string;
    /**
     * GitHub文件名称。
     * @example `testAkLeak`
     */
    GithubFileName: string;
    /**
     * AK泄露事件的情报来源。
     * @example `GitHub`
     */
    Source: string;
    /**
     * 泄露事件的最新发现时间。
     * @example `2021-07-06 17:49:39`
     */
    GmtModified: string;
    /**
     * 资产所在的平台，取值固定为**云平台**。
     * @example `云平台`
     */
    Asset: string;
    /**
     * AK泄露事件的处理时间。
     * @example `2022-01-17 15:47:08`
     */
    DealTime: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `79CFF74D-E967-5407-8A78-EE03B925FDAA`
     */
    RequestId: string;
    /**
     * 泄露的AccessKey ID。
     * @example `LTAI4G4VjkC9wenfEvgX****`
     */
    AccesskeyId: string;
    /**
     * GitHub文件的地址。
     * @example `https://github.com/Blue00Blue/ExamOnline/blob/6c932c10fc3f217783f3937e2b230f79656c18a7/testAk****`
     */
    GithubFileUrl: string;
    /**
     * AK泄露事件的处理方式。取值：
     * - **manual**：已确认手动删除
     * - **disable**：已手动禁用
     * - **add-whitelist**：已加白名单
     * - **pending**：未处理
     * @example `add-whitelist`
     */
    DealType: string;
    /**
     * 泄露的代码片段。
     * @example `\n1231 \nak=LTAI4G4VjkC9wenfEvgX**** \n12311123 \nsk1999 \nsk1999sk1999 \nsk1999sk1999 \n\n\ntest001 ak hht \nak=LTAI4G4VjkC9wenfEvgX**** \nsk=AjEhS9XmnIzllpAx2LxMTMdrTG****`
     */
    Code: string;
    /**
     * AK泄露事件的首次发现时间。
     * @example `2021-07-06 17:49:41`
     */
    GmtCreate: string;
    /**
     * GitHub仓库地址。
     * @example `https://github.com/Blue00Blue/ExamOn****`
     */
    GithubRepoUrl: string;
    /**
     * AK关联的密钥有效性。取值：
     * - **0**：待确认
     * - **1**：有效
     * - **2**：无效
     * @example `2`
     */
    TokenValid: number;
    /**
     * AK白名单添加时间。单位：毫秒。
     * @example `1689172004478`
     */
    WhitelistTime: number;
}
