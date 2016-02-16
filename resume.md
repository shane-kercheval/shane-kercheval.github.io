<!--
---
layout: resume
title: Resume
permalink: /resume/
include_in_nav: false
---
-->
{% assign resume = site.data.resume %}

<h1>{{ resume.name }}{{ resume.credentials }}</h1>
<div id="resume_contact_info">
{{ resume.contact_info.phone }} |
<a href="mailto:{{ resume.contact_info.email }}" target="_blank">{{ resume.contact_info.email }}</a> |
<a href="{{ resume.contact_info.linkedIn }}" target="_blank">{{ resume.contact_info.linkedIn }}</a>
<br>
<a href="{{ resume.contact_info.website }}" target="_blank">{{ resume.contact_info.website }}</a>
</div>
<div id="primary-column">
  <h2>{{ resume.summary_name }}</h2>
  {% for summary in resume.summaries %}
    <p>{{ summary.summary }}</p>
  {% endfor %}

<!--
  <ul>
    {% for summary in resume.summaries %}
      <li>{{ summary.summary }}</li>
    {% endfor %}
  </ul>
-->

  <h2>{{ resume.experience_name }}</h2>
  {% for job in resume.jobs %}
    <div class="resume_job_item">
      <span class="resume_company"><a href="{{ job.website }}" target="_blank">{{ job.company }}</a></span><span class="resume_year"> ({{ job.years }})</span>
      <div class="resume_position">{{ job.position }}</div>
      <ul>
        {% for responsibility in job.responsibilities %}
          <li>
            {{ responsibility.desc }}
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>
<div id="secondary-column">
  <h2>{{ resume.education_name }}</h2>
  {% for item in resume.education %}
    <div class="resume_education_item">
      <span class="resume_education_name">{{ item.name }}</span>
      <span class="resume_education_source">{{ item.source }}</span><span class="resume_year"> ({{ item.year_completed }})</span>
      <ul class="resume_education_list">
        {% for point in item.points %}
          <li>
            {{ point.point }}
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
  <h2>{{ resume.skills_name }}</h2>
  {% for skill in resume.skills %}
    <div class="resume_skill_group">
      <span class="resume_skill">{{ skill.skill }}</span>
      <span class="resume_skill_level">
        {% for i in (1..7) %}
          {% if i == skill.skill_level %}
            <span class="circle">{% include icon-circle-fill.svg %}</span>
          {% else %}
            <span class="circle">{% include icon-circle.svg %}</span>
          {% endif %}
        {% endfor %}
      </span>
    </div>
  {% endfor %}
  <h2>{{ resume.tools_name }}</h2>
  {% for tool in resume.tools %}
    <div class="resume_skill_group">
      <span class="resume_skill">{{ tool.tool }}</span>
      <span class="resume_skill_level">
        {% for i in (1..7) %}
          {% if i == tool.skill_level %}
            <span class="circle">{% include icon-circle-fill.svg %}</span>
          {% else %}
            <span class="circle">{% include icon-circle.svg %}</span>
          {% endif %}
        {% endfor %}
      </span>
    </div>
  {% endfor %}
</div>
