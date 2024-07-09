export interface CreatePipelineRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 流水线名称
     * @example `示例流水线`
     */
    "name": string;
    /**
     * 流水线YAML描述，可参考文档https://help.aliyun.com/document_detail/2249317.html 编写
     * @example `sources:                                                  # sources 配置流水线源节点
      my_repo:                                                # 流水线源唯一标识 id
        type: codeup                                          # 流水线源类型
        name: 代码源名称                                       # 代码源的展示名称
        endpoint: <your-codeup-repository-url>                # 代码源的 url
        branch: master                                        # 代码源的默认分支
        triggerEvents: push                                    # 代码源监听事件
        certificate:                                          # certificate 认证信息
          type: serviceConnection                              # 认证类型为服务连接
          serviceConnection: <your-service-connection-id>      # 服务连接 id
    stages:                                       # stages 配置流水线阶段
      build_stage:                                # 流水线阶段标识 id
        name: 构建阶段                             # 流水线阶段的展示名称
        jobs:                                     # jobs 配置流水线任务
          build_job:                              # 流水线任务标识 id
            name: 构建任务                         # 流水线任务的展示名称
            runsOn: public/cn-beijing             # 流水线任务运行的集群环境
            steps:                                # steps 配置流水线步骤
              build_step:                         # 流水线步骤标识 id
                step: JavaBuild                   # 选择执行步骤
                name: java构建                     # 流水线执行步骤的展示名称
                with:                             # 步骤的参数
                  run: |
                    mvn -B clean package -Dmaven.test.skip=true -Dautoconfig.skip
              upload_step:
                step: ArtifactUpload
                name: 构建物上传
                with:
                  uploadType: flowPublic
                  artifact: default
                  filePath:
                    - target/
                    - deploy.sh
      deploy_stage:
        name: 部署阶段
        jobs:
          deploy_job:
            name: 主机组部署任务
            component: VMDeploy                # 选择执行组件
            with:                              # 执行组件的参数
              artifact: $[stages.build_stage.build_job.upload_step.artifacts.default]
              machineGroup: <your-machine-group-id>
              artifactDownloadPath: /home/admin/app/package.tgz
              executeUser: root
              run: |
                mkdir -p /home/admin/application/
                tar zxvf /home/admin/app/package.tgz -C /home/admin/application/
                sh /home/admin/application/deploy.sh restart`
     */
    "content": string;
}
