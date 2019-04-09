/**
 * 这里是统一管理接口文档
 */
import http from './http'
let api = {
    user:{
        add:'/api/meeting-client/user/addUser',
        checkPhone: '/api/meeting-client/user/checkUserPhoneIsExists',
        login:'/api/meeting-client/user/login',
        code:'/api/meeting-client/user/getsmscode',// 获取验证码
        revise:'/api/meeting-client/user/modifyUserTelephone',//修改手机号
        modifyPassword:'/api/meeting-client/user/modifyUserPassword',//修改密码
        lostPassword:'/api/meeting-client/user/lostPassword',//忘记密码
        checksms:'/api/meeting-client/user/checksms',//验证码是否正确
    },
    // 创建会议的接口
    meet:{
        add: '/api/meeting-client/addAndUpdateMeeting/post',
        getCity: '/api/meeting-client/findAllThePlaces/get',
        getInitData: '/api/meeting-client/findDicAllDatas/get',//字典表下拉数据
        find: '/api/meeting-client/findMeetingById/get',
        list: '/api/meeting-client/findMeetingList/get',
        findPhoto: '/api/meeting-client/meeting/findAllMeetingPhoto'
    },
    // 门票管理
    ticketManagement:{
        regList:'/api/meeting-client/registfields/getRegsByMeetingId', 
        list: '/api/meeting-client/ticket/selectTicketList',
        add: '/api/meeting-client/ticket/putTicket',
        search: '/api/meeting-client/ticket/getOneByMeetId',
        status: '/api/meeting-client/ticket/updateTicketStatus' ,
        urlList: '/api/meeting-client/ticket/selectTickeUrl',
        addUp: '/api/meeting-client/registfields/addOrUpdateRegs',
        lengthCode: '/api/meeting-client/registfields/selectLengthByCode',
        timeData: '/api/meeting-client/findMeetingCoreContent/get',
    },
    // 会议议程
    agenda: {
      list: '/api/meeting-client/agenda/list',
      add: '/api/meeting-client/agenda/add',
      /**
       * 删除接口地址调整
       */
      del: '/api/meeting-client/agenda/del',
      find: '/api/meeting-client/agenda/get',
      /**
       * 2019/1/18
       * 会议议程相关新接口
       */
      /**
       * 保存议程
       * url:'/agendaAdminController/updateAgendaListByDate'
       * method: 'post'
       *请求参数：
       |   参数名称    |   类型   |  注释  |
       | :-------: | :----: | :--: |
       | groupDate | String | 保存日期 |
       | meetingId | String | 会议id |
       |  agenda   |  对象数组  | 保存列表 |
       | companyid | String | 公司id |
       | sequence  |  int   | 第几天  |
       */
      updateAgendaListByDate: '/api/meeting-client/agendaAdminController/updateAgendaListByDate',
      /**
       * 获取日期（日期动态条件）
       * url: '/agendaAdminController/agendaDate'
       * method: 'post'
       * 请求参数
       |   参数名称    |   类型   |  描述  |
       | :-------: | :----: | :--: |
       | meetingId | String | 会议id |
       */
      agendaDate: '/api/meeting-client/agendaAdminController/agendaDate',
      /**
       * 查询会议列表
       *url：/agendaAdminController/agendaListByDate
       *method：post
       *请求参数：
       |   参数名臣    |   类型   |  注释  |
       | :-------: | :----: | :--: |
       | meetingId | String | 会议id |
       | groupDate | String |  日期  |
       |
       */
      agendaListByDate: '/api/meeting-client/agendaAdminController/agendaListByDate',
      /**
       * 议程展示列表(预览)
       * url：/agendaAdminController/agendaListByMetting
       * method：post
       * 请求参数
       |   参数名称    |   类型   |  描述  |
       | :-------: | :----: | :--: |
       */
      agendaListByMetting: '/api/meeting-client/agendaAdminController/agendaListByMetting',
      /**
       * 2019/1/22 议程模板下载导入相关接口
       *
       */
      /**
       * 议程模板下载
       * url: '/agenda/dowmload'
       * method: post
       * 请求参数
       */
      downloadTemplate: '/api/meeting-client/agenda/dowmload',
      /**
       * 导入模板
       * url: '/agenda/import'
       * method: post
       * 请求参数(表单数据)
       * file: 文件对象
       * meetingId: 会议id
       * groupDate: 日期
       * sequence: 第几天
       */
      // importTemplate: '/fileapi/agenda/import'
      importTemplate: '/api/meeting-client/agenda/import'
    },
    guest:{
        list: '/api/meeting-client/guest/list',
        add: '/api/meeting-client/guest/add',
        del: '/api/meeting-client/guest/del',
        find: '/api/meeting-client/guest/get'
    },
    // 人员管理
    personnelManagement:{
        list: '/api/meeting-client/personnel/selectChecksByMeetingId', //高级筛选列表
        lists: '/api/meeting-client/personnel/getPCPersonalList', //列表
        updateIsIsAttend: '/api/meeting-client/personnel/updateIsIsAttend', //标记/取消未出席
        edit: '/api/meeting-client/personnel/updateByPersonId', //添加编辑人员
        eidtPersonnel: '/api/meeting-client/personnel/personnel',  //编辑座位
        find: '/api/meeting-client/personnel/updateJoinStatusList', //审核签到
        type:'api/meeting-client/registfields/get', //根据状态变化信息
        details:'api/meeting-client/personnel/detail', //人员详情
        batchOperation:'api/meeting-client/personnel/updatePCJoinStatusList', //批量操作接口
        detailList:'api/meeting-client/personnel/getSignDetailList', //标记签到下拉
        downloadExcel:'api/meeting-client/personnel/downloadExcel',  //下载模板
        leadExcel:'api/meeting-client/personnel/leadExcel',  //人员模板导入
        createExcel:'api/meeting-client/personnel/createExcel',  //人员模板导出
        province:'api/meeting-client/findAllProvice/get', //省份列表·
        chrNum:'api/meeting-client/personnel/togetherNum', //参会人编辑
        downErrExcel: 'api/meeting-client/personnel/downloadErrorExcel',
        sendTick: 'api/meeting-client/personnel/sendMessage'
    },
   	//统计
     statistics:{
        find: '/api/meeting-client/statistic/find',//人员统计
        sign: '/api/meeting-client/statistic/sign',//人员统计
        line: '/api/meeting-client/statistic/line'//表格
    },
    seting:{
        findAddpeopleList: '/api/meeting-client/personnel/getPersonList',
        findflieList: '/api/meeting-client/findMeetingCoreContent/get',
        addInfo: "/api/meeting-client/updateMsgSendStatus/post",
        infoList: "/api/meeting-client/sendMessageHistory/post",
        peopleList: "/api/meeting-client/sendMsgDetail/post",
        downList: "/api/meeting-client/exportMsgDetail/get"
    },
    receivesInformation:{
        postList: '/api/meeting-client/editReceptionInfo/post',
        get: '/api/meeting-client/getReceptionInfo/post'
    },
    receptionManagement:{
        queryList: '/api/meeting-client/DiningPlanController/selectConditionByMettingId', //查询条件
        haveMeals: '/api/meeting-client/DiningPlanController/selectEatingCountList', //用餐列表
        numberMan: '/api/meeting-client/DiningPlanController/countNumber', //人数统计
        mealArrangement: '/api/meeting-client/DiningPlanController/updateMealPlan', //用餐安排
    },
    accommodation:{
        queryList: '/api/meeting-client/roomAdminController/selectRoomConditionByMettingId', //查询条件
        haveMeals: '/api/meeting-client/roomAdminController/selecRoomCountList', //住宿列表
        numberMan: '/api/meeting-client/roomAdminController/countRoomNum', //人数统计
        selectConsumByMeetingId: '/api/meeting-client/personnel/selectConsumByMeetingId', //人员列表表头：
        mealArrangement: '/api/meeting-client/personnelservice/updateRoom', //住宿安排
    },
    // 签到管理
    signIn:{
        signInList: '/api/meeting-client/findMeetingById/get', //查询条件
    },

    /**
     * 子账号相关接口（封装）
     *
     * @date: 2019/2/13
     */
    company: {
      /**
       * 查询用户是否创建过企业接口封装
       *
       * @url: /mcompany/selectCompanyCountByUserid
       * @method: post
       * @param: userid(必填)   用户id
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      selectCompanyCountByUserid: '/api/meeting-client/mcompany/selectCompanyCountByUserid',
      pictureFile:'/api/meeting-client/mcompany/downPicture',


      /**
       * 创建企业接口封装
       *
       * @url: /mcompany/insertCompany
       * @method: post,
       * @param:  name(string)      企业名称
       *          size(int)         企业规模
       *          industry(string)  企业行业
       *          mail(string)      企业邮箱
       *          userid(string)    创始人
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      insertCompany: '/api/meeting-client/mcompany/insertCompany',

      /**
       * 查询用户的企业(我创建的)
       *
       * @url:  /mcompany/selectCompanyByUserid
       * @method:  post
       * @param:  userid(string)   用户id
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      selectCompanyByUserid: '/api/meeting-client/mcompany/selectCompanyByUserid',

      /**
       * 修改企业信息
       *
       * @url: /mcompany/updateCompany
       * @method: post
       * @param:  name(string)      企业名称
       *          size(int)         企业规模
       *          industry(sting)   企业行业
       *          mail(string)      企业邮箱
       *          userid(string)    创始人（不可更改）
       *          isdelete(string)  是否删除---1 删除 0 不删除
       *          isrun(string)     企业是否可运行--- 1 运行 0 不运行
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      updateCompany: '/api/meeting-client/mcompany/updateCompany',

      /**
       * 我加入的公司
       *
       * @url: /company/selectJoinCompany
       * @method: post
       * @param:  phone(string)    用户手机号
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      selectJoinCompany: '/api/meeting-client/company/selectJoinCompany',

      /**
       * 查询我加入的公司数量
       *
       * @url: /company/selectJoinCompanyCount
       * @method: post
       * @param: phone(string)  用户手机号
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      selectJoinCompanyCount: '/api/meeting-client/company/selectJoinCompanyCount',

      /**
       * 新增子账户
       *
       * @url: /company/insertUser
       * @method: post
       * @param:  username(string)      用户名称
       *          userid(string)        邀请人id
       *          phone(string)         注册人手机号
       *          password(string)      密码
       *          componyid(string)     要求加入企业的账号
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      insertUser: '/api/meeting-client/company/insertUser',

      /**
       * 查询公司下的子账户
       *
       * @url: /company/selectCompany
       * @method: post
       * @param: companyid(string)    企业账号
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      selectCompany: '/api/meeting-client/company/selectCompany',

      /**
       * 修改子账户运行状态
       *
       * @url: /company/updateUserStartType
       * @method: post
       * @param:  phone(string)       要修改状态的用户手机号
       *          companyid(string)   企业账号
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      updateUserStartType: '/api/meeting-client/company/updateUserStartType',

      /**
       * 给公司下的某员工赋值会议权限
       *
       * @url: /mcompany/insertCompany
       * @method: post
       * @param:  meetingArr(Array)     [meetingid,meetingid] 传入以数组形式,分割
       *          phone(string)         创建者手机号
       *          companyid(string)     企业账号
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      // insertCompany: '/api/meeting-client/mcompany/insertCompany',

      /**
       * 查询运行中的企业
       *
       * @url：/mcompany/selectStartComapny
       * @method: post
       * @param: userid(string)   用户名称
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      selectStartComapny: '/api/meeting-client/mcompany/selectStartComapny',

      /**
       * 邀请好友页面
       *
       * @url: /company/scanErCode
       * @method: post
       * @param: userid(string)   创始人id
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      scanErCode: '/api/meeting-client/company/scanQrCode',

      /**
       * 获取用户创建/加入的企业的列表接口封装
       *
       * @url: /mcompany/selectUserWithCompanyList
       * @method: post
       *
       * @author: guohongjian
       * @date: 2019/2/13
       */
      selectUserWithCompanyList: '/api/meeting-client/mcompany/selectUserWithCompanyList',

      /**
       * 删除企业接口封装
       *
       * @url: /mcompany/updateComapnyIsdelete
       * @method: post
       * @param: id(string) 企业id
       *
       * @author: guohongjian
       * @date: 2019/2/15
       */
      updateComapnyIsdelete: '/api/meeting-client/mcompany/updateComapnyIsdelete',

      /**
       * 启用企业接口封装
       *
       * @url: /mcompany/updateCompanyIsrun
       * @method: post
       * @param: id(string)   企业id
       *          isrun(int)  是否启用 1 ---启用 0 ---不启用
       *
       * @author: guohongjian
       * @date: 2019/2/15
       */
      updateCompanyIsrun: '/api/meeting-client/mcompany/updateCompanyIsrun',

      /**
       * 下拉框  用户有的所有企业接口封装
       *
       * @url: /mcompany/topSelectCompany
       * @method: post
       * @param: cid(string) 企业id
       *
       * @author: guohongjian
       * @date: 2019/2/18
       */
      topSelectCompany: '/api/meeting-client/mcompany/topSelectCompany',

      selectCompanyId: '/api/meeting-client/mcompany/selectCompanyidByUserid',
      updateUserMeeting: '/api/meeting-client/company/updateUserMeeting',
      checkCompanyStatus: '/api/meeting-client/checkCompanyStatus',

    },
    imgUpload: '/fileapi/image/upload',
    fiveStatus: "/api/meeting-client/findMeetingCoreContent/isShow",
    navMeetList: '/api/meeting-client/topMeetingMessageCount'
}   
export default api;
