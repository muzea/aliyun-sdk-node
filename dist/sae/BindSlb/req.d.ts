interface BindSlbRequest {
    "RegionId"?: string;
    /**
    * 部署成功的目标应用ID
    * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
    */ "AppId": string;
    /**
    * 绑定公网SLB。例如: \[{"port":80,"targetPort":8080,"protocol":"TCP"}\]，表示将容器的8080端口通过slb的80端口暴露服务，协议为TCP，为空忽略。
    * @example `[{"port":80,"targetPort":8080,"protocol":"TCP"}]`
    */ "Internet"?: string;
    /**
    * 绑定私网SLB。例如: \[{"port":80,"targetPort":8080,"protocol":"TCP"}\]，表示将容器的8080端口通过slb的80端口暴露服务，协议为TCP，为空忽略。
    * @example `[{"port":80,"targetPort":8080,"protocol":"TCP"}]`
    */ "Intranet"?: string;
    "InternetSlbId"?: string;
    "IntranetSlbId"?: string;
}
export { BindSlbRequest };