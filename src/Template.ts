import Style from './template/Style';
import Header from './template/Header';
import Footer from './template/Footer';
import ProjectSection from './template/ProjectSection';
import SkillSection from './template/SkillSection';
import ExperienceSection from './template/ExperienceSection';
import EduAndCertSection from './template/EduAndCertSection';
import Builder from './template/Builder';

export default function Template(element, data) {

    const isLive = (bool) => !bool.live ? Builder(element ,data) : '';
    
    return `
        ${ Style() }
        <div class="wrapper">
          <!-- 상단 헤더 -->
          ${ Header(data.header || {} ) }
          <!-- 프로젝트 섹션 -->
          ${ ProjectSection(data.projects || [] ) }
          <!-- 기술 섹션 -->
          ${ SkillSection(data.skills || [] ) }
          <!-- 경험 섹션 -->
          ${ ExperienceSection(data.experience || [] ) } 
          <!-- 교육 및 인증 섹션 -->
          ${ EduAndCertSection(data.eduandcert || {} ) }
          <!-- 하단 푸터 -->
          ${ Footer(data.footer || {} ) }
          <!-- 빌더 -->
          ${ isLive(data.footer || {} ) }
        </div>        
        `;
}