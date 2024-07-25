'use client'
import React from 'react'
import Image from 'next/image'
import { db } from '@/firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react'
import { z, ZodType } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import ClipLoader from "react-spinners/ClipLoader";
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



const UNILAGPGCourses = [
  {
    value: "executive master of taxation (part time)",
    label: "Executive Master of Taxation (Part Time)"
  },
  {
    value: "master in diplomacy and strategic studies (part time)",
    label: "Master in Diplomacy and Strategic Studies (Part Time)"
  },
  {
    value: "master in facilities management (part time)",
    label: "Master in Facilities Management (Part Time)"
  },
  {
    value: "master in project management (part time)",
    label: "Master in Project Management (Part Time)"
  },
  {
    value: "master in urban management (part time)",
    label: "Master in Urban Management (Part Time)"
  },
  {
    value: "master of urban logistics and transport policy (part time)",
    label: "Master of Urban Logistics and Transport Policy (Part Time)"
  },
  {
    value: "master of applied geophysics (engineering geophysics option) (part time)",
    label: "Master of Applied Geophysics (Engineering Geophysics Option) (Part Time)"
  },
  {
    value: "master of applied geophysics (environmental geophysics option) (part time)",
    label: "Master of Applied Geophysics (Environmental Geophysics Option) (Part Time)"
  },
  {
    value: "master of applied geophysics (exploration geophysics option) (part time)",
    label: "Master of Applied Geophysics (Exploration Geophysics Option) (Part Time)"
  },
  {
    value: "master of aquatic resource and pollution management (part time)",
    label: "Master of Aquatic Resource and Pollution Management (Part Time)"
  },
  {
    value: "master of arts in african and diaspora studies (full time)",
    label: "Master of Arts in African and Diaspora Studies (Full Time)"
  },
  {
    value: "master of arts in african and diaspora studies (part time)",
    label: "Master of Arts in African and Diaspora Studies (Part Time)"
  },
  {
    value: "master of arts in english language (full time)",
    label: "Master of Arts in English Language (Full Time)"
  },
  {
    value: "master of arts in english language (part time)",
    label: "Master of Arts in English Language (Part Time)"
  },
  {
    value: "master of arts in english literature (full time)",
    label: "Master of Arts in English Literature (Full Time)"
  },
  {
    value: "master of arts in english literature (part time)",
    label: "Master of Arts in English Literature (Part Time)"
  },
  {
    value: "master of arts in french (full time)",
    label: "Master of Arts in French (Full Time)"
  },
  {
    value: "master of arts in history and strategic studies (full time)",
    label: "Master of Arts in History and Strategic Studies (Full Time)"
  },
  {
    value: "master of arts in history and strategic studies (part time)",
    label: "Master of Arts in History and Strategic Studies (Part Time)"
  },
  {
    value: "master of arts in igbo (language option) (full time)",
    label: "Master of Arts in Igbo (Language Option) (Full Time)"
  },
  {
    value: "master of arts in igbo (literature option) (full time)",
    label: "Master of Arts in Igbo (Literature Option) (Full Time)"
  },
  {
    value: "master of arts in music (ethnomusicology) (full time)",
    label: "Master of Arts in Music (Ethnomusicology) (Full Time)"
  },
  {
    value: "master of arts in music (music education) (full time)",
    label: "Master of Arts in Music (Music Education) (Full Time)"
  },
  {
    value: "master of arts in music (music psychology) (full time)",
    label: "Master of Arts in Music (Music Psychology) (Full Time)"
  },
  {
    value: "master of arts in music (theory and composition) (full time)",
    label: "Master of Arts in Music (Theory and Composition) (Full Time)"
  },
  {
    value: "master of arts in philosophy (full time)",
    label: "Master of Arts in Philosophy (Full Time)"
  },
  {
    value: "master of arts in teaching of french as a foreign language (full time)",
    label: "Master of Arts in Teaching of French as a Foreign Language (Full Time)"
  },
  {
    value: "master of arts in teaching of french as a foreign language (part time)",
    label: "Master of Arts in Teaching of French as a Foreign Language (Part Time)"
  },
  {
    value: "master of arts in theatre arts (arts of the theatre) (full time)",
    label: "Master of Arts in Theatre Arts (Arts of the Theatre) (Full Time)"
  },
  {
    value: "master of arts in theatre arts (design and management) (full time)",
    label: "Master of Arts in Theatre Arts (Design and Management) (Full Time)"
  },
  {
    value: "master of arts in theatre arts (dramatic theory and criticism) (full time)",
    label: "Master of Arts in Theatre Arts (Dramatic Theory and Criticism) (Full Time)"
  },
  {
    value: "master of arts in theatre arts (theatre history) (full time)",
    label: "Master of Arts in Theatre Arts (Theatre History) (Full Time)"
  },
  {
    value: "master of arts in visual art (ceramics)",
    label: "Master of Arts in Visual Art (Ceramics)"
  },
  {
    value: "master of arts in visual art (graphics design)",
    label: "Master of Arts in Visual Art (Graphics Design)"
  },
  {
    value: "master of arts in visual art (painting)",
    label: "Master of Arts in Visual Art (Painting)"
  },
  {
    value: "master of arts in visual art (sculpture)",
    label: "Master of Arts in Visual Art (Sculpture)"
  },
  {
    value: "master of arts in visual art (textile)",
    label: "Master of Arts in Visual Art (Textile)"
  },
  {
    value: "master of arts in visual arts (arts education) (full time)",
    label: "Master of Arts in Visual Arts (Arts Education) (Full Time)"
  },
  {
    value: "master of arts in visual arts (arts history) (full time)",
    label: "Master of Arts in Visual Arts (Arts History) (Full Time)"
  },
  {
    value: "master of arts in yoruba (language option) (full time)",
    label: "Master of Arts in Yoruba (Language Option) (Full Time)"
  },
  {
    value: "master of arts in yoruba (literature option) (full time)",
    label: "Master of Arts in Yoruba (Literature Option) (Full Time)"
  },
  {
    value: "master of business administration (full time)",
    label: "Master of Business Administration (Full Time)"
  },
  {
    value: "master of business administration (part time)",
    label: "Master of Business Administration (Part Time)"
  },
  {
    value: "master of coastal resilience and risk management (part time)",
    label: "Master of Coastal Resilience and Risk Management (Part Time)"
  },
  {
    value: "master of criminology (part time)",
    label: "Master of Criminology (Part Time)"
  },
  {
    value: "master of development finance (part time)",
    label: "Master of Development Finance (Part Time)"
  },
  {
    value: "master of disaster management (part time)",
    label: "Master of Disaster Management (Part Time)"
  },
  {
    value: "master of education in adult education management (full time)",
    label: "Master of Education in Adult Education Management (Full Time)"
  },
  {
    value: "master of education in adult literacy and non-formal education (full time)",
    label: "Master of Education in Adult Literacy and Non-Formal Education (Full Time)"
  },
  {
    value: "master of education in adult literacy and non-formal education (part time)",
    label: "Master of Education in Adult Literacy and Non-Formal Education (Part Time)"
  },
  {
    value: "master of education in biology education (full time)",
    label: "Master of Education in Biology Education (Full Time)"
  },
  {
    value: "master of education in business education (full time)",
    label: "Master of Education in Business Education (Full Time)"
  },
  {
    value: "master of education in chemistry education (full time)",
    label: "Master of Education in Chemistry Education (Full Time)"
  },
  {
    value: "master of education in chemistry education (part time)",
    label: "Master of Education in Chemistry Education (Part Time)"
  },
  {
    value: "master of education in community development and social work (full time)",
    label: "Master of Education in Community Development and Social Work (Full Time)"
  },
  {
    value: "master of education in community development and social work (part time)",
    label: "Master of Education in Community Development and Social Work (Part Time)"
  },
  {
    value: "master of education in curriculum theory and development (full time)",
    label: "Master of Education in Curriculum Theory and Development (Full Time)"
  },
  {
    value: "master of education in curriculum theory and development (part time)",
    label: "Master of Education in Curriculum Theory and Development (Part Time)"
  },
  {
    value: "master of education in educational administration and planning (full time)",
    label: "Master of Education in Educational Administration and Planning (Full Time)"
  },
  {
    value: "master of education in educational administration and planning (part time)",
    label: "Master of Education in Educational Administration and Planning (Part Time)"
  },
  {
    value: "master of education in english education (full time)",
    label: "Master of Education in English Education (Full Time)"
  },
  {
    value: "master of education in english education (part time)",
    label: "Master of Education in English Education (Part Time)"
  },
  {
    value: "master of education in guidance and counselling (full time)",
    label: "Master of Education in Guidance and Counselling (Full Time)"
  },
  {
    value: "master of education in guidance and counselling (part time)",
    label: "Master of Education in Guidance and Counselling (Part Time)"
  },
  {
    value: "master of education in health education (full time)",
    label: "Master of Education in Health Education (Full Time)"
  },
  {
    value: "master of education in health education (part time)",
    label: "Master of Education in Health Education (Part Time)"
  },
  {
    value: "master of education in history education (full time)",
    label: "Master of Education in History Education (Full Time)"
  },
  {
    value: "master of education in history education (part time)",
    label: "Master of Education in History Education (Part Time)"
  },
  {
    value: "master of education in home economics education (full time)",
    label: "Master of Education in Home Economics Education (Full Time)"
  },
  {
    value: "master of education in home economics education (part time)",
    label: "Master of Education in Home Economics Education (Part Time)"
  },
  {
    value: "master of education in human kinetics and sport administration (full time)",
    label: "Master of Education in Human Kinetics and Sport Administration (Full Time)"
  },
  {
    value: "master of education in human kinetics and sport administration (part time)",
    label: "Master of Education in Human Kinetics and Sport Administration (Part Time)"
  },
  {
    value: "master of education in mathematics education (full time)",
    label: "Master of Education in Mathematics Education (Full Time)"
  },
  {
    value: "master of education in mathematics education (part time)",
    label: "Master of Education in Mathematics Education (Part Time)"
  },
  {
    value: "master of education in measurement and evaluation (full time)",
    label: "Master of Education in Measurement and Evaluation (Full Time)"
  },
  {
    value: "master of education in measurement and evaluation (part time)",
    label: "Master of Education in Measurement and Evaluation (Part Time)"
  },
  {
    value: "master of education in physics education (full time)",
    label: "Master of Education in Physics Education (Full Time)"
  },
  {
    value: "master of education in physics education (part time)",
    label: "Master of Education in Physics Education (Part Time)"
  },
  {
    value: "master of education in religious studies (full time)",
    label: "Master of Education in Religious Studies (Full Time)"
  },
  {
    value: "master of education in religious studies (part time)",
    label: "Master of Education in Religious Studies (Part Time)"
  },
  {
    value: "master of education in science education (biology option) (part time)",
    label: "Master of Education in Science Education (Biology Option) (Part Time)"
  },
  {
    value: "master of education in social studies (full time)",
    label: "Master of Education in Social Studies (Full Time)"
  },
  {
    value: "master of education in social studies (part time)",
    label: "Master of Education in Social Studies (Part Time)"
  },
  {
    value: "master of education in sociology of education (full time)",
    label: "Master of Education in Sociology of Education (Full Time)"
  },
  {
    value: "master of education in sociology of education (part time)",
    label: "Master of Education in Sociology of Education (Part Time)"
  },
  {
    value: "master of education in special education (full time)",
    label: "Master of Education in Special Education (Full Time)"
  },
  {
    value: "master of education in special education (part time)",
    label: "Master of Education in Special Education (Part Time)"
  },
  {
    value: "master of education in technology education (full time)",
    label: "Master of Education in Technology Education (Full Time)"
  },
  {
    value: "master of education in technology education (part time)",
    label: "Master of Education in Technology Education (Part Time)"
  },
  {
    value: "master of employment and labour studies (part time)",
    label: "Master of Employment and Labour Studies (Part Time)"
  },
  {
    value: "master of environmental design in architecture (full time)",
    label: "Master of Environmental Design in Architecture (Full Time)"
  },
  {
    value: "master of environmental management (full time)",
    label: "Master of Environmental Management (Full Time)"
  },
  {
    value: "master of environmental management (part time)",
    label: "Master of Environmental Management (Part Time)"
  },
  {
    value: "master of environmental planning (part time)",
    label: "Master of Environmental Planning (Part Time)"
  },
  {
    value: "master of estate management (full time)",
    label: "Master of Estate Management (Full Time)"
  },
  {
    value: "master of estate management (part time)",
    label: "Master of Estate Management (Part Time)"
  },
  {
    value: "master of finance (full time)",
    label: "Master of Finance (Full Time)"
  },
  {
    value: "master of finance (part time)",
    label: "Master of Finance (Part Time)"
  },
  {
    value: "master of fine arts in painting (full time)",
    label: "Master of Fine Arts in Painting (Full Time)"
  },
  {
    value: "master of fine arts in sculpture (full time)",
    label: "Master of Fine Arts in Sculpture (Full Time)"
  },
  {
    value: "master of fine arts in visual arts (ceramics)",
    label: "Master of Fine Arts in Visual Arts (Ceramics)"
  },
  {
    value: "master of fine arts in visual arts (graphics design)",
    label: "Master of Fine Arts in Visual Arts (Graphics Design)"
  },
  {
    value: "master of fine arts in visual arts (textile)",
    label: "Master of Fine Arts in Visual Arts (Textile)"
  },
  {
    value: "master of geomatics (full time)",
    label: "Master of Geomatics (Full Time)"
  },
  {
    value: "master of geomatics (part time)",
    label: "Master of Geomatics (Part Time)"
  },
  {
    value: "master of geopolitics and advanced strategic studies (part time)",
    label: "Master of Geopolitics and Advanced Strategic Studies (Part Time)"
  },
  {
    value: "master of industrial and labour relations (part time)",
    label: "Master of Industrial and Labour Relations (Part Time)"
  },
  {
    value: "master of industrial and personnel relations (part time)",
    label: "Master of Industrial and Personnel Relations (Part Time)"
  },
  {
    value: "master of information technology (part time)",
    label: "Master of Information Technology (Part Time)"
  },
  {
    value: "master of international law and diplomacy (part time)",
    label: "Master of International Law and Diplomacy (Part Time)"
  },
  {
    value: "master of international relations and strategic studies (part time)",
    label: "Master of International Relations and Strategic Studies (Part Time)"
  },
  {
    value: "master of landscape architecture (full time)",
    label: "Master of Landscape Architecture (Full Time)"
  },
  {
    value: "master of landscape architecture (part time)",
    label: "Master of Landscape Architecture (Part Time)"
  },
  {
    value: "master of law enforcement and criminal justice (full time)",
    label: "Master of Law Enforcement and Criminal Justice (Full Time)"
  },
  {
    value: "master of law enforcement and criminal justice (part time)",
    label: "Master of Law Enforcement and Criminal Justice (Part Time)"
  },
  {
    value: "master of laws (llm) (full time)",
    label: "Master of Laws (LLM) (Full Time)"
  },
  {
    value: "master of laws (llm) (part time)",
    label: "Master of Laws (LLM) (Part Time)"
  },
  {
    value: "master of laws in taxation (part time)",
    label: "Master of Laws in Taxation (Part Time)"
  },
  {
    value: "master of management (full time)",
    label: "Master of Management (Full Time)"
  },
  {
    value: "master of management (part time)",
    label: "Master of Management (Part Time)"
  },
  {
    value: "master of marketing communication (full time)",
    label: "Master of Marketing Communication (Full Time)"
  },
  {
    value: "master of marketing communication (part time)",
    label: "Master of Marketing Communication (Part Time)"
  },
  {
    value: "master of marketing communication and media management (full time)",
    label: "Master of Marketing Communication and Media Management (Full Time)"
  },
  {
    value: "master of marketing communication and media management (part time)",
    label: "Master of Marketing Communication and Media Management (Part Time)"
  },
  {
    value: "master of medical microbiology and parasitology (full time)",
    label: "Master of Medical Microbiology and Parasitology (Full Time)"
  },
  {
    value: "master of microbiology and public health (full time)",
    label: "Master of Microbiology and Public Health (Full Time)"
  },
  {
    value: "master of music in african musicology (full time)",
    label: "Master of Music in African Musicology (Full Time)"
  },
  {
    value: "master of music in african musicology (part time)",
    label: "Master of Music in African Musicology (Part Time)"
  },
  {
    value: "master of music in composition (full time)",
    label: "Master of Music in Composition (Full Time)"
  },
  {
    value: "master of music in performance (full time)",
    label: "Master of Music in Performance (Full Time)"
  },
  {
    value: "master of music in theory (full time)",
    label: "Master of Music in Theory (Full Time)"
  },
  {
    value: "master of nursing (full time)",
    label: "Master of Nursing (Full Time)"
  },
  {
    value: "master of nursing (part time)",
    label: "Master of Nursing (Part Time)"
  },
  {
    value: "master of petroleum geosciences (full time)",
    label: "Master of Petroleum Geosciences (Full Time)"
  },
  {
    value: "master of philosophy in adult education (full time)",
    label: "Master of Philosophy in Adult Education (Full Time)"
  },
  {
    value: "master of philosophy in curriculum theory and development (full time)",
    label: "Master of Philosophy in Curriculum Theory and Development (Full Time)"
  },
  {
    value: "master of philosophy in educational administration and planning (full time)",
    label: "Master of Philosophy in Educational Administration and Planning (Full Time)"
  },
  {
    value: "master of philosophy in english education (full time)",
    label: "Master of Philosophy in English Education (Full Time)"
  },
  {
    value: "master of philosophy in guidance and counselling (full time)",
    label: "Master of Philosophy in Guidance and Counselling (Full Time)"
  },
  {
    value: "master of philosophy in health education (full time)",
    label: "Master of Philosophy in Health Education (Full Time)"
  },
  {
    value: "master of philosophy in history education (full time)",
    label: "Master of Philosophy in History Education (Full Time)"
  },
  {
    value: "master of philosophy in home economics education (full time)",
    label: "Master of Philosophy in Home Economics Education (Full Time)"
  },
  {
    value: "master of philosophy in human kinetics and sport administration (full time)",
    label: "Master of Philosophy in Human Kinetics and Sport Administration (Full Time)"
  },
  {
    value: "master of philosophy in mathematics education (full time)",
    label: "Master of Philosophy in Mathematics Education (Full Time)"
  },
  {
    value: "master of philosophy in measurement and evaluation (full time)",
    label: "Master of Philosophy in Measurement and Evaluation (Full Time)"
  },
  {
    value: "master of philosophy in physics education (full time)",
    label: "Master of Philosophy in Physics Education (Full Time)"
  },
  {
    value: "master of philosophy in religious studies (full time)",
    label: "Master of Philosophy in Religious Studies (Full Time)"
  },
  {
    value: "master of philosophy in social studies (full time)",
    label: "Master of Philosophy in Social Studies (Full Time)"
  },
  {
    value: "master of philosophy in sociology of education (full time)",
    label: "Master of Philosophy in Sociology of Education (Full Time)"
  },
  {
    value: "master of philosophy in special education (full time)",
    label: "Master of Philosophy in Special Education (Full Time)"
  },
  {
    value: "master of philosophy in technology education (full time)",
    label: "Master of Philosophy in Technology Education (Full Time)"
  },
  {
    value: "master of professional ethics and criminal justice (full time)",
    label: "Master of Professional Ethics and Criminal Justice (Full Time)"
  },
  {
    value: "master of professional ethics and criminal justice (part time)",
    label: "Master of Professional Ethics and Criminal Justice (Part Time)"
  },
  {
    value: "master of project management (full time)",
    label: "Master of Project Management (Full Time)"
  },
  {
    value: "master of project management (part time)",
    label: "Master of Project Management (Part Time)"
  },
  {
    value: "master of public and international affairs (part time)",
    label: "Master of Public and International Affairs (Part Time)"
  },
  {
    value: "master of public administration (full time)",
    label: "Master of Public Administration (Full Time)"
  },
  {
    value: "master of public administration (part time)",
    label: "Master of Public Administration (Part Time)"
  },
  {
    value: "master of public health (full time)",
    label: "Master of Public Health (Full Time)"
  },
  {
    value: "master of public health (part time)",
    label: "Master of Public Health (Part Time)"
  },
  {
    value: "master of public management (part time)",
    label: "Master of Public Management (Part Time)"
  },
  {
    value: "master of risk management (full time)",
    label: "Master of Risk Management (Full Time)"
  },
  {
    value: "master of risk management (part time)",
    label: "Master of Risk Management (Part Time)"
  },
  {
    value: "master of science in accounting (full time)",
    label: "Master of Science in Accounting (Full Time)"
  },
  {
    value: "master of science in accounting (part time)",
    label: "Master of Science in Accounting (Part Time)"
  },
  {
    value: "master of science in actuarial science (full time)",
    label: "Master of Science in Actuarial Science (Full Time)"
  },
  {
    value: "master of science in biochemistry (full time)",
    label: "Master of Science in Biochemistry (Full Time)"
  },
  {
    value: "master of science in biochemistry (part time)",
    label: "Master of Science in Biochemistry (Part Time)"
  },
  {
    value: "master of science in cell biology and genetics (full time)",
    label: "Master of Science in Cell Biology and Genetics (Full Time)"
  },
  {
    value: "master of science in cell biology and genetics (part time)",
    label: "Master of Science in Cell Biology and Genetics (Part Time)"
  },
  {
    value: "master of science in chemical engineering (full time)",
    label: "Master of Science in Chemical Engineering (Full Time)"
  },
  {
    value: "master of science in chemical engineering (part time)",
    label: "Master of Science in Chemical Engineering (Part Time)"
  },
  {
    value: "master of science in chemistry (full time)",
    label: "Master of Science in Chemistry (Full Time)"
  },
  {
    value: "master of science in chemistry (part time)",
    label: "Master of Science in Chemistry (Part Time)"
  },
  {
    value: "master of science in civil and environmental engineering (full time)",
    label: "Master of Science in Civil and Environmental Engineering (Full Time)"
  },
  {
    value: "master of science in civil and environmental engineering (part time)",
    label: "Master of Science in Civil and Environmental Engineering (Part Time)"
  },
  {
    value: "master of science in clinical psychology (full time)",
    label: "Master of Science in Clinical Psychology (Full Time)"
  },
  {
    value: "master of science in computer science (full time)",
    label: "Master of Science in Computer Science (Full Time)"
  },
  {
    value: "master of science in computer science (part time)",
    label: "Master of Science in Computer Science (Part Time)"
  },
  {
    value: "master of science in economics (full time)",
    label: "Master of Science in Economics (Full Time)"
  },
  {
    value: "master of science in economics (part time)",
    label: "Master of Science in Economics (Part Time)"
  },
  {
    value: "master of science in environmental toxicology and pollution management (full time)",
    label: "Master of Science in Environmental Toxicology and Pollution Management (Full Time)"
  },
  {
    value: "master of science in environmental toxicology and pollution management (part time)",
    label: "Master of Science in Environmental Toxicology and Pollution Management (Part Time)"
  },
  {
    value: "master of science in estate management (full time)",
    label: "Master of Science in Estate Management (Full Time)"
  },
  {
    value: "master of science in estate management (part time)",
    label: "Master of Science in Estate Management (Part Time)"
  },
  {
    value: "master of science in finance (full time)",
    label: "Master of Science in Finance (Full Time)"
  },
  {
    value: "master of science in finance (part time)",
    label: "Master of Science in Finance (Part Time)"
  },
  {
    value: "master of science in geography (full time)",
    label: "Master of Science in Geography (Full Time)"
  },
  {
    value: "master of science in geography (part time)",
    label: "Master of Science in Geography (Part Time)"
  },
  {
    value: "master of science in geophysics (full time)",
    label: "Master of Science in Geophysics (Full Time)"
  },
  {
    value: "master of science in geophysics (part time)",
    label: "Master of Science in Geophysics (Part Time)"
  },
  {
    value: "master of science in industrial and labour relations (part time)",
    label: "Master of Science in Industrial and Labour Relations (Part Time)"
  },
  {
    value: "master of science in industrial relations and personnel management (part time)",
    label: "Master of Science in Industrial Relations and Personnel Management (Part Time)"
  },
  {
    value: "master of science in international relations (full time)",
    label: "Master of Science in International Relations (Full Time)"
  },
  {
    value: "master of science in international relations (part time)",
    label: "Master of Science in International Relations (Part Time)"
  },
  {
    value: "master of science in marketing (full time)",
    label: "Master of Science in Marketing (Full Time)"
  },
  {
    value: "master of science in marketing (part time)",
    label: "Master of Science in Marketing (Part Time)"
  },
  {
    value: "master of science in mass communication (full time)",
    label: "Master of Science in Mass Communication (Full Time)"
  },
  {
    value: "master of science in mass communication (part time)",
    label: "Master of Science in Mass Communication (Part Time)"
  },
  {
    value: "master of science in mathematics (full time)",
    label: "Master of Science in Mathematics (Full Time)"
  },
  {
    value: "master of science in mathematics (part time)",
    label: "Master of Science in Mathematics (Part Time)"
  },
  {
    value: "master of science in mechanical engineering (full time)",
    label: "Master of Science in Mechanical Engineering (Full Time)"
  },
  {
    value: "master of science in mechanical engineering (part time)",
    label: "Master of Science in Mechanical Engineering (Part Time)"
  },
  {
    value: "master of science in medical microbiology and parasitology (full time)",
    label: "Master of Science in Medical Microbiology and Parasitology (Full Time)"
  },
  {
    value: "master of science in microbiology (full time)",
    label: "Master of Science in Microbiology (Full Time)"
  },
  {
    value: "master of science in microbiology (part time)",
    label: "Master of Science in Microbiology (Part Time)"
  },
  {
    value: "master of science in petroleum geosciences (full time)",
    label: "Master of Science in Petroleum Geosciences (Full Time)"
  },
  {
    value: "master of science in petroleum geosciences (part time)",
    label: "Master of Science in Petroleum Geosciences (Part Time)"
  },
  {
    value: "master of science in physics (full time)",
    label: "Master of Science in Physics (Full Time)"
  },
  {
    value: "master of science in physics (part time)",
    label: "Master of Science in Physics (Part Time)"
  },
  {
    value: "master of science in political science (full time)",
    label: "Master of Science in Political Science (Full Time)"
  },
  {
    value: "master of science in political science (part time)",
    label: "Master of Science in Political Science (Part Time)"
  },
  {
    value: "master of science in psychology (full time)",
    label: "Master of Science in Psychology (Full Time)"
  },
  {
    value: "master of science in psychology (part time)",
    label: "Master of Science in Psychology (Part Time)"
  },
  {
    value: "master of science in sociology (full time)",
    label: "Master of Science in Sociology (Full Time)"
  },
  {
    value: "master of science in sociology (part time)",
    label: "Master of Science in Sociology (Part Time)"
  },
  {
    value: "master of science in transport (part time)",
    label: "Master of Science in Transport (Part Time)"
  },
  {
    value: "master of science in urban and regional planning (full time)",
    label: "Master of Science in Urban and Regional Planning (Full Time)"
  },
  {
    value: "master of science in urban and regional planning (part time)",
    label: "Master of Science in Urban and Regional Planning (Part Time)"
  },
  {
    value: "master of science in zoology (full time)",
    label: "Master of Science in Zoology (Full Time)"
  },
  {
    value: "master of science in zoology (part time)",
    label: "Master of Science in Zoology (Part Time)"
  },
  {
    value: "master of science, environmental toxicology and pollution management (part time)",
    label: "Master of Science, Environmental Toxicology and Pollution Management (Part Time)"
  },
  {
    value: "master of strategic and international studies (part time)",
    label: "Master of Strategic and International Studies (Part Time)"
  },
  {
    value: "master of transportation planning and management (full time)",
    label: "Master of Transportation Planning and Management (Full Time)"
  },
  {
    value: "master of transportation planning and management (part time)",
    label: "Master of Transportation Planning and Management (Part Time)"
  },
  {
    value: "master of urban and regional planning (full time)",
    label: "Master of Urban and Regional Planning (Full Time)"
  },
  {
    value: "master of urban and regional planning (part time)",
    label: "Master of Urban and Regional Planning (Part Time)"
  },
  {
    value: "master of violence and conflict studies (full time)",
    label: "Master of Violence and Conflict Studies (Full Time)"
  },
  {
    value: "master of violence and conflict studies (part time)",
    label: "Master of Violence and Conflict Studies (Part Time)"
  },
  {
    value: "master of violence, conflict and development (full time)",
    label: "Master of Violence, Conflict and Development (Full Time)"
  },
  {
    value: "master of violence, conflict and development (part time)",
    label: "Master of Violence, Conflict and Development (Part Time)"
  },
  {
    value: "master of visual arts (full time)",
    label: "Master of Visual Arts (Full Time)"
  },
  {
    value: "master of visual arts (part time)",
    label: "Master of Visual Arts (Part Time)"
  },
  {
    value: "master of women and gender studies (full time)",
    label: "Master of Women and Gender Studies (Full Time)"
  },
  {
    value: "master of women and gender studies (part time)",
    label: "Master of Women and Gender Studies (Part Time)"
  },
  {
    value: "master of youth and community development (full time)",
    label: "Master of Youth and Community Development (Full Time)"
  },
  {
    value: "master of youth and community development (part time)",
    label: "Master of Youth and Community Development (Part Time)"
  },
  {
    value: "master of zoology (full time)",
    label: "Master of Zoology (Full Time)"
  },
  {
    value: "master of zoology (part time)",
    label: "Master of Zoology (Part Time)"
  }
]




async function addDataToFireStore(subscriberName: any, email: any, phone: any, school: any, type: any, course: any, session: any, purpose:any, time:any ) {
  try {
      const docRef = await addDoc(collection(db, "Prospective Students Email List"), {
          Name: subscriberName,
          Email: email,
          Phone: phone,
          School: school,
          Programme: type,
          Course: course,
          Session: session,
          Purpose: purpose,
          Timestamp: time

      })
      console.log("Document written with ID: ", docRef.id)
      return true;
  } catch (error) {
      console.log("Error adding document ", error)
      return false;
  }
}






export default function EmailSubscriptionForm(){
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [school, setSchool] = useState("UNILAG")
    const [programme, setProgramme] = useState("Postgraduate")
    const [session, setSession] = useState("2024/2025")
    const [purpose, setPurpose] = useState("To Join WhatsApp Group")
    const [serverMessage, setServerMessage] = useState("")
    const [processing, setProcessing] = useState(false)
    

    // Check if UNILAGPGCourses is defined and log its value
  console.log('UNILAGPGCourses:', UNILAGPGCourses);

  // Add a fallback in case UNILAGPGCourses is undefined
  const courses = UNILAGPGCourses || [];


  const handleSelect = (currentValue:any) => {
    console.log('Selected value:', currentValue);
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);
  };


    type EmailSubscriptionData = {
      fullName: string;
      email: string;
      phoneNumber: string;
  }


  const emailSubscriptionFormSchema: ZodType<EmailSubscriptionData> = z.object({
      fullName: z.string().trim().min(2, { message: "Name cannot be less than 2 character" }),
      email: z.string().email().trim().toLowerCase(),
      phoneNumber: z.string().trim().min(11, { message: "Your phone number is not complete" }).max(11, { message: "Phone number is wrong. It is already more than 11 digits" }),
  })


  const { register, handleSubmit, formState: { errors } } = useForm<EmailSubscriptionData>({ resolver: zodResolver(emailSubscriptionFormSchema) })



  const handleEmailSubscription = async () => {
    setProcessing(true)
    const subscriptionTime = new Date()
    console.log(name, email, phone, school, programme, value, session, )
    const added = await addDataToFireStore(name, email, phone, school, programme, value, session, purpose, subscriptionTime);
    if (added) {
        const response = await fetch("/api/new-subscription-email-notification", {
            method: "POST",
            body:JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                school: school,
                programme: programme,
                course: value,
                session: session,
                purpose: purpose,
                time: subscriptionTime

            })
        })
        console.log(response)
        if(response.ok){             
            const successResponse = await response.json()
            setServerMessage(successResponse.message)
        }else{
            const errorResponse = await response.json()
            setServerMessage(errorResponse.message)
            setProcessing(false)
        }

        //setServerMessage("Success");
    }
}


    return(
        <div>
            {serverMessage === "Success" &&
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50">
              <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg sm:mx-8 md:mx-auto md:max-w-md lg:max-w-lg">
                <button
                  className="absolute top-0 right-0 m-4 text-2xl rounded px-4 text-gray-600 hover:text-white hover:bg-vasaskills-red"
                  onClick={()=>{setServerMessage(""); setProcessing(false); setEmail(""); setName(""); setPhone(""); setProgramme(""); setPurpose(""); setSchool("")}}
                >
                  &times;
                </button>
                <div className='mt-4 pt-2'>
                  <h2></h2>
                  <p>Dear {name},</p>
                  <p>This is to acknowledge that we have received your request to join {school} {programme} WhatsApp Group for {value}.</p>
                  <p>Kindly check your email ({email}) for the WhatsApp Group Invitation Link.</p>
                  <p>Regards</p>
                  </div>
              </div>
            </div>
            }
            <form onSubmit={handleSubmit(handleEmailSubscription)} className="max-w-sm mx-auto my-8 bg-gray-200 rounded p-2 shadow">
            <h3 className = "text-center text-2xl text-vasaskills-blue">Want to Join The 2024/2025 UNILAG Postgraduate WhatsApp Group for your Course? Fill The Form Below To Join Now</h3>
      <div>
      <input
        type="text"
        value={name} {...register("fullName")}
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="Enter your name"
        className="w-full px-4 py-2 my-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        required
      />
      {errors.fullName && <span className = "text-red-500">{errors.fullName.message}</span>}
      </div>
      <div>
      <input
        type="email"
        value={email} {...register("email")}
        onChange={(e) => setEmail(e.currentTarget.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-2 my-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        required
      />
      {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
      </div>
      <div>
      <input
        type="text"
        value={phone} {...register("phoneNumber")}
        onChange={(e) => setPhone(e.currentTarget.value)}
        placeholder="Enter your phone number"
        className="w-full px-4 py-2 my-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        required
      />
      {errors.phoneNumber && <span className='text-red-500'>{errors.phoneNumber.message}</span>}
      </div>
      <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="mt-2 w-full justify-between"
        >
          <div className = "truncate max-w-full text-gray-500">
          {value
            ? UNILAGPGCourses.find((framework) => framework.value === value)?.label
            : "Select course..."}
            </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search course..." className = "h-9"/>
          <CommandEmpty>No course found.</CommandEmpty>
          <CommandGroup>
          <CommandList>
            {UNILAGPGCourses.map((framework:any) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue:any) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {framework.label}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                
              </CommandItem>
              
            ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
    {name !== "" && email !== "" && phone !== "" && school !== "" && programme !== "" && value !== "" && session !== "" && purpose !== "" ?
    <div className="mt-2">
                            {processing && serverMessage === ""? <button type="button" className="w-full mt-2 px-4 py-2 bg-vasaskills-blue text-white font-bold rounded-3xl hover:bg-blue-600 focus:outline-none flex justify-center items-center"><ClipLoader color="#36d7b7" /><span>Processing...</span></button> :
                                <button type="submit" className="w-full mt-2 px-4 py-2 bg-vasaskills-blue text-white font-bold rounded-3xl hover:bg-blue-600 focus:outline-none">Join WhatsApp Group</button>
                            }
                        </div>:
                        <div className='mt-2'>
                          <input type = "button" className='w-full mt-2 px-4 py-2 bg-vasaskills-blue text-white font-bold rounded-3xl' value="Join WhatsApp Group" />
                        </div>

}
    </form>
        </div>
    )
}