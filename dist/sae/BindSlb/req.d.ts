export interface BindSlbRequest {
    /**
     * 需要绑定SLB的目标应用ID。
     * @example `0099b7be-5f5b-4512-a7fc-56049ef1****`
     */
    "AppId": string;
    /**
     * 绑定公网SLB。例如：\[{"port":80,"targetPort":8080,"protocol":"TCP"}\]，表示通过TCP协议，将容器的8080端口通过SLB的80端口暴露服务。取值说明如下：
     * - **port**：SLB端口。
     * - **targetPort**：容器端口。
     * - **protocol**：网络协议。支持**TCP**、**HTTP**和**HTTPS**。
     * - **httpsCertId**：SSL证书。仅限选择**HTTPS**时需配置SSL证书。
     * @example `[{"port":80,"targetPort":8080,"protocol":"TCP"}]`
     */
    "Internet"?: string;
    /**
     * 绑定私网SLB。例如：\[{"port":80,"targetPort":8080,"protocol":"TCP"}\]，表示通过TCP协议，将容器的8080端口通过SLB的80端口暴露服务。取值说明如下：
     * - **port**：SLB端口。
     * - **targetPort**：容器端口。
     * - **protocol**：网络协议。支持**TCP**、**HTTP**和**HTTPS**。
     * - **httpsCertId**：SSL证书。仅限选择**HTTPS**时需配置SSL证书。
     * @example `[{"port":80,"targetPort":8080,"protocol":"TCP"}]`
     */
    "Intranet"?: string;
    /**
     * 使用指定的已购买的公网SLB，支持非共享型实例。
     * @example `lb-bp1tg0k6d9nqaw7l1****`
     */
    "InternetSlbId"?: string;
    /**
     * 使用指定的已购买的私网SLB，支持非共享型实例。
     * @example `lb-bp1tg0k6d9nqaw7l1****`
     */
    "IntranetSlbId"?: string;
}
