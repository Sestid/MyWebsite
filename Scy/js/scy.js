
(function ($) {
    "use strict";

    $("#email").click(function () {
        alert('网易邮箱：sestid@163.com');
    });
    $("#qq").click(function () {
        alert('我的QQ是：1432824214');
    });
    $("#weixin").click(function () {
        alert('我的微信是：woshishichunyuya');
    });

    const skillsList = [
        {
            "skill": "Html（5）、Css（3）、Sass、Less",
            "skillInfo": "包括：媒体查询media、弹性布局（Flex）、网格布局（Grid）、transform、animation等；"
        },
        {
            "skill": "JavaScript、TypeScript、jQuery、Es6、EChart.js",
            "skillInfo": "熟练掌握原生Js、大量的jQuery代码编写经验、了解es6新语法、做过完整的echart图项目；"
        },
        {
            "skill": "Bootstrap布局、jQueryUI、Webpack打包工具、Swiper等一些移动端插件",
            "skillInfo": ""
        },
        {
            "skill": "掌握React框架、react native、react-router、Next.js",
            "skillInfo": ""
        },
        {
            "skill": "Antd Design Pro、AntV、Antd Design、Material-UI等组价库",
            "skillInfo": ""
        },
        {
            "skill": "掌握Linux基本命令",
            "skillInfo": "会配置Nginx、能独立完成网站部署工作；"
        },
        {
            "skill": "熟练使用Git，有自己的github库；",
            "skillInfo": ""
        },
        {
            "skill": "Wxml、Wxss微信小程序开发",
            "skillInfo": "做过贝壳找房的页面<a target='_blank' href='https://github.com/Sestid/applet-of-WeChat-'>（点击查看）</a>"
        },
        {
            "skill": "熟悉Ajax、Axios",
            "skillInfo": ""
        },
        {
            "skill": "熟悉Graphql",
            "skillInfo": ""
        },
    ];
    let skillsHtml = "";
    var skills = document.getElementById("skills-list");
    for (let i = 0; i < skillsList.length; i++) {
        const { skill, skillInfo } = skillsList[i]
        skillsHtml += `<li><div class="fw-mid">${skill}</div><span>${skillInfo}</span></li>`
    }
    skills.innerHTML = skillsHtml;


    const projectsList = [
        {
            "className": "view-first",
            "type": "photography",
            "imgSrc": "images/folio/vcg.png",
            "name": "视觉中国VCG官方网站",
            "infoId": "#vcg",
        },
        {
            "className": "view-tenth",
            "type": "photography",
            "imgSrc": "images/folio/cfp.png",
            "name": "CFP网站",
            "infoId": "#cfp",
        },
        {
            "className": "view-first",
            "type": "photography",
            "imgSrc": "images/folio/vcgMusic.png",
            "name": "VCG音乐站",
            "infoId": "#vcgMusic",
        },
        {
            "className": "view-tenth",
            "type": "photography",
            "imgSrc": "images/folio/veer.png",
            "name": "Veer网站",
            "infoId": "#veer",
        },
        {
            "className": "view-first",
            "type": "photography",
            "imgSrc": "images/folio/hwzk.png",
            "name": "华文字库",
            "infoId": "#hwzk",
        },
        {
            "className": "view-tenth",
            "type": "photography",
            "imgSrc": "images/folio/cms.png",
            "name": "cms内容管理系统",
            "infoId": "#cms",
        },
        {
            "className": "view-first",
            "type": "photography",
            "imgSrc": "images/folio/platform.png",
            "name": "Veer后台管理系统（BI）",
            "infoId": "#platform",
        },
        {
            "className": "view-tenth",
            "type": "photography",
            "imgSrc": "images/folio/exd.jpg",
            "name": "智协慧同公司官方网站",
            "infoId": "#myModal",
        },
        {
            "className": "view-first",
            "type": "photography",
            "imgSrc": "images/folio/vStudio.jpg",
            "name": "vStudio 汽车算法建模工具",
            "infoId": "#myModal0",
        },
        {
            "className": "view-tenth",
            "type": "photography",
            "imgSrc": "images/folio/tsp.png",
            "name": "TSP 车辆监控平台",
            "infoId": "#myModal2",
        },
        {
            "className": "view-first",
            "type": "photography",
            "imgSrc": "images/folio/vMaker.png",
            "name": "vMaker 车辆自动驾驶标注工具",
            "infoId": "#myModal3",
        },
        {
            "className": "view-tenth",
            "type": "photography",
            "imgSrc": "images/folio/vehicle-analysis.png",
            "name": "车辆数据分析系统",
            "infoId": "#myModal4",
        },
        {
            "className": "view-first",
            "type": "commercial",
            "imgSrc": "images/folio/douban.png",
            "name": "仿豆瓣市集（移动端）",
            "infoId": "#myModal5",
        },
        {
            "className": "view-tenth",
            "type": "commercial",
            "imgSrc": "images/folio/xiaomi.png",
            "name": "仿小米官网",
            "infoId": "#myModal6",
        },
        {
            "className": "view-first",
            "type": "commercial",
            "imgSrc": "images/folio/hao123.png",
            "name": "仿好123官网",
            "infoId": "#myModal7",
        },
        {
            "className": "view-tenth",
            "type": "commercial",
            "imgSrc": "images/folio/lagou.png",
            "name": "仿拉勾官网",
            "infoId": "#myModal8",
        },
        {
            "className": "view-first",
            "type": "potrait",
            "imgSrc": "img/index.png",
            "name": "个人简历",
            "infoId": "#myModal9",
        },
    ];
    let projectsHtml = "";
    var projects = document.getElementById("project-list");
    for (let i = 0; i < projectsList.length; i++) {
        const { className, type, imgSrc, name, infoId } = projectsList[i];
        projectsHtml += `<li class="view ${className} ${type}">
        <img src="${imgSrc}" alt="vcg" />
        <div class="mask">
            <h2>${name}</h2>
            <a role="button" class="info" data-toggle="modal"
            data-target="${infoId}">查看详情</a>
        </div>
    </li>`
    }
    projects.innerHTML = projectsHtml;

    const projectModalList = [
        {
            "projectId": "vcg",
            "name": "视觉中国VCG官方网站",
            "imgSrc": "images/folio/vcg.png",
            "link": "https://www.vcg.com/",
            "donePart": '<p>插画：<a target="_blank" href="https://www.vcg.com/illustration/">https://www.vcg.com/illustration/</a></p> <p>矢量图：<a target="_blank" href="https://www.vcg.com/vectorgraph/">https://www.vcg.com/vectorgraph/</a></p><p>美酒美图素材库：<a target="_blank" href="https://www.vcg.com/liquor/">https://www.vcg.com/liquor/</a></p><p>VDAM产品推广页：<a target="_blank" href="https://www.vcg.com/dam/">https://www.vcg.com/dam/</a></p><p>seo新页面：<a target="_blank" href="https://www.vcg.com/newest-photo/">https://www.vcg.com/newest-photo/</a></p><p>奥运专题页面：<a target="_blank" href="https://www.vcg.com/sport/">https://www.vcg.com/sport/</a></p><p>2020北京冬奥会：<a target="_blank" href="https://www.vcg.com/beijing2022">https://www.vcg.com/beijing2022</a></p><p>ka个性化页面：<a target="_blank" href="https://jsbqfw.vcgplus.com/">https://jsbqfw.vcgplus.com/</a></p><p>创意洞察：<a target="_blank" href="https://www.vcg.com/creative-insight/topSearches">https://www.vcg.com/creative-insight/topSearches</a></p><p>功能迭代：视频推音乐、搜索下拉、下拉推荐：所有主页、所有搜索页VCG-底部导航foot自定义：cms可配置......</p>',
            "desc": "由多个项目集成，相关技术:Node.js, Express, GraphQL , React, Webpack, Babel, Browsersync等等"
        },
        {
            "projectId": "cfp",
            "name": "CFP网站",
            "imgSrc": "images/folio/cfp.png",
            "link": "https://www.cfp.cn/",
            "donePart": '<p>建党百年专题：<a target="_blank" href="https://www.cfp.cn/founding-century/101976">https://www.cfp.cn/founding-century/101976</a></p><p>供应商CCTV+的内容专区：<a target="_blank" href="https://www.cfp.cn/collection/cctvplus/">https://www.cfp.cn/collection/cctvplus/</a></p><p>功能迭代：搜索下拉、下拉推荐：所有主页、所有搜索页；cfp频道页改版（国内、国际、商业、体育、娱乐、时尚、档案、旅游、故事、漫画、图表）；cfp组照页改版，时尚改版；cfp人名消歧义关联人物推荐......</p>',
            "desc": "由多个项目集成，相关技术:Node.js, Express, GraphQL , React, Webpack, Babel, Browsersync等等"
        },
        {
            "projectId": "vcgMusic",
            "name": "VCG音乐站",
            "imgSrc": "images/folio/vcgMusic.png",
            "link": "https://www.vcg.com/music/",
            "donePart": '<p>首页：<a target="_blank" href="https://www.vcg.com/music/">https://www.vcg.com/music/</a></p><p>歌单：<a target="_blank" href="https://www.vcg.com/music/sets/">https://www.vcg.com/music/sets/</a></p><p>音效：<a target="_blank" href="https://www.vcg.com/music/sound-effects/">https://www.vcg.com/music/sound-effects/</a></p><p>价格：<a target="_blank" href="https://www.vcg.com/music/pricing/">https://www.vcg.com/music/pricing/</a></p><p>个人创作者：<a target="_blank" href="https://www.vcg.com/music/personal-subscription/">https://www.vcg.com/music/personal-subscription/</a></p><p>企业用户：<a target="_blank" href="https://www.vcg.com/music/commercial-subscription/">https://www.vcg.com/music/commercial-subscription/</a></p>',
            "desc": "相关技术：Node.js, Express, GraphQL , React, Webpack, Babel, Browsersync.",
        },
        {
            "projectId": "veer",
            "name": "Veer网站",
            "imgSrc": "images/folio/veer.png",
            "link": "https://www.veer.com/",
            "donePart": '<p>背景：<a target="_blank" href="https://www.veer.com/background/">https://www.veer.com/background/</a></p><p>灵感：<a target="_blank" href="https://www.veer.com/sets/57/">https://www.veer.com/sets/57/</a></p><p>功能迭代、bug修复等</p>',
            "desc": "VEER是隶属视觉（中国）文化发展股份有限公司旗下网站；VEER是一家国际化的微图提供商；VEER内容主要源于iStock，其为全球微利图库的鼻祖；在线提供优质图像资料。VEER整合全球优质内容，结合搜索人工智能，为用户带来极致的搜索体验，让购图更简单！",
        },
        {
            "projectId": "hwzk",
            "name": "华文字库",
            "imgSrc": "images/folio/hwzk.png",
            "link": "https://sinotype.vcg.com/",
            "donePart": '<p>全站</p>',
            "desc": "华文字库系常州华文文字技术有限公司的产品，专注于中文字库的生产、技术研发、教育、基于云字库的平台的开发业务。华文字库自1991年创立伊始，以其专业的设计、符合国际标准，三十年来被微软、苹果、IBM、Adobe、亚马逊等国际著名公司采用，成为这些公司中文字库的首选，是目前装机最多、应用最广的中文字库。在中文信息平台领域，华文字库的市场占有率超过90% ，成为全球的中文字库标准。值得注意的是，这些字体虽然预装于各个系统之中，但不能脱离系统使用。作为商用的专利，如商业广告用字、宣传物料用字、数字媒体设计用字、PPT对外演示、出版印刷等用途需购买商业授权。华文公司的业务覆盖了创意产业环境建造的各个环节，对于未来以”云“服务为基础的新格局，将为业界提供最完备的服务。",
        },
        {
            "projectId": "cms",
            "name": "cms内容管理系统",
            "imgSrc": "images/folio/cms.png",
            "link": "https://cms.visualchina.com/banners/firist-page",
            "donePart": '<p>美酒美图素材库：<a target="_blank" href="https://cms.visualchina.com/banners/goodWinePage">https://cms.visualchina.com/banners/goodWinePage</a></p><p>模板数据管理-模板列表：<a target="_blank" href="https://cms.visualchina.com/module">https://cms.visualchina.com/module</a></p><p>模板数据管理-KA网站列表：<a target="_blank" href="https://cms.visualchina.com/ka-site">https://cms.visualchina.com/ka-site</a></p><p>搜索数据看板（VCG&CFP）：<a target="_blank" href="https://cms.visualchina.com/module-board">https://cms.visualchina.com/module-board</a></p><p>创意洞察榜单管理：<a target="_blank" href="https://cms.visualchina.com/creative-insight">https://cms.visualchina.com/creative-insight</a></p><p>功能迭代、bug修复等</p>',
            "desc": "VCG、CFP网站数据管理",
        },
        {
            "projectId": "platform",
            "name": "Veer后台管理系统（BI）",
            "imgSrc": "images/folio/platform.png",
            "link": "https://platform.veer.com/",
            "donePart": '<p>全站（运营管理全部模块）</p>',
            "desc": "veer bi",
        },
        {
            "projectId": "myModal",
            "name": "智协慧同公司官方网站",
            "imgSrc": "images/folio/exd.jpg",
            "link": "http://www.smartsct.com/",
            "donePart": '<p>所有页面的开发，以及部署</p>',
            "desc": "整个网页交互部分自己纯用原生 Js 和 jQuery 手写，有很多交互的部分，还有许多特效，没有用任何插件；经历好几次迭代完成，其中包括公司增加新的项目、新的技术等等；一直在与项目经理沟通，还有 UI 人员配合下完成全部页面。",
        },
        {
            "projectId": "myModal0",
            "name": "vStudio 汽车算法建模工具",
            "imgSrc": "images/folio/vStudio.jpg",
            "link": "",
            "donePart": '<p>一些公共组件、3期迭代里的一些功能点以及api联调</p>',
            "desc": "利用react，TypeScript，Material-UI等前端技术开发的。<br />基于行业内成熟的大数据分布式架构批量处理海量车辆总线数据，能够分布式接入处理海量异构的总线工程数据。能满足整车开发测试过程的算法建模与调试需求，支持从道路试验的高精度数据到生产环节的TBOX数据，包括以下五个大数据析建模步骤：数据接入解析、数据预处理、工况场景提取、统计分析可视化、机器学习训练预测。支持用户向车内域控制器实时部署其建立的算法而且算法可动态加载与运行，实现云端调试车端即可部署的高效率算法迭代流程，从而大幅缩短传统车内算法调试的漫长周期，提升智能汽车的功能迭代进化效率。支持车内边缘计算与车云流计算协同的车云计算模式。域控制器在车内接入总线信号进行边缘计算，将高频信号处理成特征数据，并上传云端。云端依据特征数据进行持续学习与流计算，解决量产上市车辆在实时处理、确定性时延、特征感知、安全隐私计算等复杂场景下的算法分解，算力分布和带宽分取等智能计算需求。支持用户自定制算法模块开发，支持用户算法资产与软件自带算法一起组合使用。",
        },
        {
            "projectId": "myModal2",
            "name": "TSP 车辆监控平台",
            "imgSrc": "images/folio/tsp.png",
            "link": "",
            "donePart": '<p>系统搭建、两个页面以及全部的注册和删除</p>',
            "desc": "利用了 Antd Desgin Pro 构建系统并开发，前端展示界面通过 mqtt 的协议方式与后端进行数据交换，给回相关的控制信息，TSP 平台能够反馈给 MEC，然后 MEC 来实施控制包括车辆管理、OBU 管理、MEC 服务管理，主要是跟后端人员进行数据交互。",
        },
        {
            "projectId": "myModal3",
            "name": "vMaker 车辆自动驾驶标注工具",
            "imgSrc": "images/folio/vMaker.png",
            "link": "",
            "donePart": '<p>项目中的创建部分（创建公司，数据管理、分发、标注、审核等人员、）；测试人员</p>',
            "desc": "<p>利用react，redux，Material-UI，Node.js，webpack等前端技术开发的。</p><p>包括企业管理人员界面（其中有公司管理、用户管理、日志管理；可以创建标注公司、任务分发人员、数据管理人员、企业审核人员、感知组组长）；数据管理人员界面（其中有创建项目、导入项目、项目管理、标注标签、数据管理）；分发人员界面（可以查看项目状态，并将项目分发给具体标注公司以及标注人员）；标注负责人界面（其中有项目管理、用户管理、日志管理；可以创建标注人员和标注审核人员）；标注人员界面（可以对项目图片进行标注）；标注审核人员界面（对标注人员提交的项目进行审核）；企业审核人员（对项目进行终审）；感知组组长（对数据管理人员的数据下载进行审核）</p>",
        },
        {
            "projectId": "myModal4",
            "name": "车辆数据分析系统",
            "imgSrc": "images/folio/vehicle-analysis.png",
            "link": "",
            "donePart": '<p>整体框架的搭建、用户分析界面的全部的图、数据渲染、还有切换到具体VIN号时利用不同csv数据展示不同的页面。</p>',
            "desc": "<p>利用jQuery和Bootstrap搭建的框架，EChart.js画图，Webpack打包，实现的动态数据页面，兼容IE9，主要包括位置分析、用户分析、现场仿真、用户查询以及几个详情页面。可以展示散点分布图、热力分布图、时间极坐标图、地点路状图、行为统计雷达图、加速度折线图、超速情况饼图、百里灯光使用情况柱状图等。会根据数据后台数据库的接口进行页面渲染，以及根据VIN号显示对应的图，选择周期、天显示对应的数据图，鼠标放图上会显示具体的字述展示，点击图上还会弹出炫酷的热点分布地图蒙层。</p>",
        },
        {
            "projectId": "myModal5",
            "name": "仿豆瓣市集（移动端）",
            "imgSrc": "images/folio/douban.png",
            "link": "https://github.com/Sestid/react-douban-mobile-",
            "donePart": '<p>所有的页面开发以及前后交互对接口</p>',
            "desc": "<p>利用了 html+css+Js+jQuery，还有 react 分别完成这个项目的开发，并且用 Ajax、Axios 实现了前后端交互。负责整个项目的前端网页开发，其中包括首页、商品详情、加入购物车、购物车、登录、注册等页面。</p>",
        },
        {
            "projectId": "myModal6",
            "name": "仿小米官网",
            "imgSrc": "images/folio/xiaomi.png",
            "link": "https://github.com/Sestid/-Webpages",
            "donePart": '<p>所有的页面开发以及交互</p>',
            "desc": "<p>利用了 html+css+Js+jQuery，实现了小米官网的首页，可以说得上是基本还原。（banmner轮播图，商品隐藏列表的展示，倒计时秒杀等）",
        },
        {
            "projectId": "myModal7",
            "name": "仿好123官网",
            "imgSrc": "images/folio/hao123.png",
            "link": "https://github.com/Sestid/-Webpages",
            "donePart": '<p>所有的页面开发以及交互</p>',
            "desc": "<p>利用了 html+css+Js+jQuery，实现了小米官网的首页，可以说得上是基本还原。（banmner轮播图，商品隐藏列表的展示，倒计时秒杀等）",
        },
        {
            "projectId": "myModal8",
            "name": "仿拉勾官网",
            "imgSrc": "images/folio/lagou.png",
            "link": "https://github.com/Sestid/-Webpages",
            "donePart": '<p>所有的页面开发以及交互</p>',
            "desc": "<p>利用了 html+css+Js+jQuery，实现了拉勾官网的首页，可以说得上是基本还原。（banmner轮播图，职位隐藏列表的展示，职位招聘信息的js字符串拼接渲染）",
        },
        {
            "projectId": "myModal9",
            "name": "个人简历（网页版）",
            "imgSrc": "img/index.png",
            "link": "http://47.100.92.181/My-web-resume/",
            "donePart": '<p>所有的页面开发以及交互</p>',
            "desc": "<p>利用jQuery、jQuery UI、Bootstrap、isotope插件、Font Awesome进行开发的响应式网页</p><p>1、刚进入画面：(包括动态展示、鼠标提示)</p><p> 2、页面整体（PC端）：(在电脑上查看)</p><p>3、我的主页：(包括动态展示、鼠标提示)</p><p>4、我的简历：(包括个人技能、教育背景、工作经历)</p>（1）个人技能：2）教育背景：（包括下拉菜单）（3）工作经历：（包括滚动框）<p>5、我的项目：(包括展示全部、公司项目、在校项目、个人项目；鼠标悬停会带特效的显示项目名称和“查看详情”按钮)</p><p>6、查看项目详情：(会弹出蒙层显示项目名称、项目图片、项目地址、负责部分、项目描述)</p>",
        },
    ];
    let projectModalHtml = "";
    var projectModal = document.getElementById("project-modal");
    for (let i = 0; i < projectModalList.length; i++) {
        const { projectId, link, imgSrc, name, donePart, desc } = projectModalList[i];
        projectModalHtml += `<div class="modal fade" id="${projectId}" tabindex="-1" role="dialog" aria-labelledby="my${projectId}"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
							aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="my${projectId}">${name}</a></h4>
				</div>
				<div class="modal-body">
					<img src="${imgSrc}" class="img-responsive" alt="modal-image">
				</div>
				<div class="modal-footer">
					<div class="mf-content">
						<p><strong>项目地址：</strong><span><a target="_blank"
									href="${link}">${link}</a></span>
						</p>
						<p><strong>负责部分：</strong><div class="donePart">${donePart}</div></p>
						<strong>
							<p>项目描述：</p>
						</strong>
						<p class="desc">${desc}</p>
					</div>
				</div>
			</div>
		</div>
	</div>`
    }
    projectModal.innerHTML = projectModalHtml;

}(jQuery));



